import { Card as POCard, CardContent as POCardContent } from "../components/ui/POCard";
import { Badge } from "../components/ui/POBadge";
import { Button as POButton } from "../components/ui/POButton";
import { Input } from "../components/ui/POInput";
import { Textarea } from "../components/ui/POTextarea";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/PODialog";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "../components/ui/POTable";

import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { useState } from "react";

let initialData = [
  {
    number: "PO001",
    date: "2025-05-30",
    vendor: "Vendor A",
    project: "Project Alpha",
    createdBy: "Admin",
    status: "Pending",
    payment: "Unpaid",
    remarks: "Urgent requirement",
    items: [
      { name: "Cement", quantity: 100, rate: 250, total: 25000 },
      { name: "Bricks", quantity: 500, rate: 8, total: 4000 }
    ],
    totalAmount: 29000
  },
  {
    number: "PO002",
    date: "2025-05-28",
    vendor: "Vendor B",
    project: "Project Beta",
    createdBy: "Manager",
    status: "Approved",
    payment: "Paid",
    remarks: "For plumbing work",
    items: [
      { name: "Pipes", quantity: 50, rate: 200, total: 10000 },
      { name: "Fittings", quantity: 100, rate: 50, total: 5000 }
    ],
    totalAmount: 15000
  }
];

interface POItem {
  name: string;
  quantity: number;
  rate: number;
  total: number;
}

interface PO {
  number: string;
  date: string;
  vendor: string;
  project: string;
  createdBy: string;
  status: string;
  payment: string;
  remarks: string;
  items: POItem[];
  totalAmount: number;
}

export default function PODashboard() {
  const [POData, setPOData] = useState(initialData);
  const [selectedPO, setSelectedPO] = useState<PO | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<{
    number: string;
    date: string;
    vendor: string;
    project: string;
    createdBy: string;
    status: string;
    payment: string;
    remarks: string;
    items: POItem[];
    totalAmount: number;
  }>({
    number: "",
    date: new Date().toISOString().split("T")[0],
    vendor: "",
    project: "",
    createdBy: "",
    status: "Pending",
    payment: "Unpaid",
    remarks: "",
    items: [],
    totalAmount: 0
  });

  const deletePO = (number: string) => {
    setPOData(POData.filter((po) => po.number !== number));
  };

  const openAddForm = () => {
    setFormData({
      number: `PO${Math.floor(Math.random() * 10000)}`,
      date: new Date().toISOString().split("T")[0],
      vendor: "",
      project: "",
      createdBy: "",
      status: "Pending",
      payment: "Unpaid",
      remarks: "",
      items: [],
      totalAmount: 0
    });
    setIsFormOpen(true);
  };

  const openEditForm = (po: { number: string; date: string; vendor: string; project: string; createdBy: string; status: string; payment: string; remarks: string; items: { name: string; quantity: number; rate: number; total: number; }[]; totalAmount: number; }) => {
    setFormData(po);
    setIsFormOpen(true);
  };

  const saveForm = () => {
    const updatedData = POData.some(po => po.number === formData.number)
      ? POData.map(po => po.number === formData.number ? formData : po)
      : [...POData, formData];
    setPOData(updatedData);
    setIsFormOpen(false);
  };

  const handleItemChange = (index: number, field: keyof POItem, value: string) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === "name" ? value : parseFloat(value) || 0
    };
    updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].rate;
    const totalAmount = updatedItems.reduce((sum, item) => sum + item.total, 0);
    setFormData({ ...formData, items: updatedItems, totalAmount });
  };

  const addItem = () => {
    const newItems = [...formData.items, { name: "", quantity: 0, rate: 0, total: 0 }];
    setFormData({ ...formData, items: newItems });
  };

  const removeItem = (index: number) => {
    const updatedItems = formData.items.filter((_, idx) => idx !== index);
    const totalAmount = updatedItems.reduce((sum, item) => sum + item.total, 0);
    setFormData({ ...formData, items: updatedItems, totalAmount });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📁 Purchase Orders</h1>
        <POButton onClick={openAddForm}><Plus className="w-4 h-4 mr-1" /> New PO</POButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {POData.map((po) => (
          <POCard key={po.number}>
            <POCardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">#{po.number}</h2>
                <Badge>{po.status}</Badge>
              </div>
              <p><strong>Vendor:</strong> {po.vendor}</p>
              <p><strong>Project:</strong> {po.project}</p>
              <p><strong>Total:</strong> ₹{po.totalAmount.toLocaleString()}</p>
              <div className="flex gap-2">
                <POButton size="sm" onClick={() => setSelectedPO(po)}><Eye className="w-4 h-4" /></POButton>
                <POButton size="sm" onClick={() => openEditForm(po)}><Pencil className="w-4 h-4" /></POButton>
                <POButton size="sm" variant="destructive" onClick={() => deletePO(po.number)}><Trash2 className="w-4 h-4" /></POButton>
              </div>
            </POCardContent>
          </POCard>
        ))}
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle>Purchase Order Form</DialogTitle>
          <div className="grid gap-3">
            <Input placeholder="Vendor" value={formData.vendor} onChange={(e) => setFormData({ ...formData, vendor: e.target.value })} />
            <Input placeholder="Project" value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} />
            <Input placeholder="Created By" value={formData.createdBy} onChange={(e) => setFormData({ ...formData, createdBy: e.target.value })} />
            <Textarea placeholder="Remarks" value={formData.remarks} onChange={(e) => setFormData({ ...formData, remarks: e.target.value })} />

            <div className="space-y-2">
              {formData.items.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 items-center">
                  <Input placeholder="Item" value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} />
                  <Input placeholder="Qty" type="number" value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} />
                  <Input placeholder="Rate" type="number" value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} />
                  <Input disabled value={`₹${item.total}`} />
                  <POButton variant="destructive" onClick={() => removeItem(index)}>-</POButton>
                </div>
              ))}
              <POButton size="sm" onClick={addItem}>+ Add Item</POButton>
            </div>

            <p><strong>Total Amount:</strong> ₹{formData.totalAmount.toLocaleString()}</p>
            <POButton onClick={saveForm}>Save PO</POButton>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedPO} onOpenChange={() => setSelectedPO(null)}>
        <DialogContent className="max-w-xl">
          <DialogTitle>PO Details</DialogTitle>
          {selectedPO && (
            <div className="space-y-2">
              <p><strong>Number:</strong> {selectedPO.number}</p>
              <p><strong>Date:</strong> {selectedPO.date}</p>
              <p><strong>Vendor:</strong> {selectedPO.vendor}</p>
              <p><strong>Project:</strong> {selectedPO.project}</p>
              <p><strong>Created By:</strong> {selectedPO.createdBy}</p>
              <p><strong>Status:</strong> {selectedPO.status}</p>
              <p><strong>Payment:</strong> {selectedPO.payment}</p>
              <p><strong>Remarks:</strong> {selectedPO.remarks}</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedPO.items.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.rate}</TableCell>
                      <TableCell>{item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p><strong>Grand Total:</strong> ₹{selectedPO.totalAmount.toLocaleString()}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

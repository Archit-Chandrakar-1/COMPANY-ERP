import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Package, AlertTriangle } from 'lucide-react';
import Badge from '../ui/Badge';

const materials = [
  {
    id: 1,
    name: 'Cement (43 Grade)',
    quantity: 75,
    unit: 'bags',
    threshold: 50,
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Steel Reinforcement (10mm)',
    quantity: 120,
    unit: 'tons',
    threshold: 100,
    status: 'In Stock',
  },
  {
    id: 3,
    name: 'Red Clay Bricks',
    quantity: 25,
    unit: 'thousand',
    threshold: 30,
    status: 'Low Stock',
  },
  {
    id: 4,
    name: 'Sand (Fine)',
    quantity: 10,
    unit: 'truckloads',
    threshold: 15,
    status: 'Low Stock',
  },
];

const MaterialsStatus = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Package size={18} className="text-primary" />
          Material Inventory Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-medium text-secondary text-sm pb-2">Material</th>
                <th className="text-right font-medium text-secondary text-sm pb-2">Quantity</th>
                <th className="text-left font-medium text-secondary text-sm pb-2">Status</th>
                <th className="text-left font-medium text-secondary text-sm pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.id} className="border-t border-border">
                  <td className="py-2.5">{material.name}</td>
                  <td className="py-2.5 text-right">
                    <span className="font-medium">{material.quantity}</span>{' '}
                    <span className="text-secondary text-sm">{material.unit}</span>
                  </td>
                  <td className="py-2.5">
                    <Badge
                      variant={material.status === 'In Stock' ? 'success' : 'warning'}
                    >
                      {material.status === 'Low Stock' && <AlertTriangle size={12} className="mr-1" />}
                      {material.status}
                    </Badge>
                  </td>
                  <td className="py-2.5">
                    {material.status === 'Low Stock' && (
                      <button className="btn btn-sm btn-primary">Order</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialsStatus;
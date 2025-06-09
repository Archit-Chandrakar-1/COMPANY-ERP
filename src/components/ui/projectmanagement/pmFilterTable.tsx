import React, { useState } from 'react';
import { Search, ChevronDown, Eye } from 'lucide-react';
import Button from './Button';

type FilterConfig = {
  type: 'search' | 'dropdown';
  placeholder?: string;
  options?: { value: string; label: string }[];
};

type Column = {
  key: string;
  label: string;
  filter?: FilterConfig;
  render?: (value: any, row: any) => React.ReactNode;
};

type PmFilterableTableProps = {
  columns: Column[];
  data: any[];
  className?: string;
  onViewProject?: (project: any) => void;
};

const PmFilterableTable = ({ columns, data, className = '', onViewProject }: PmFilterableTableProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleFilterChange = (columnKey: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [columnKey]: value
    }));
  };

  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([key, filterValue]) => {
      if (!filterValue) return true;
      const cellValue = row[key]?.toString().toLowerCase() || '';
      return cellValue.includes(filterValue.toLowerCase());
    });
  });

  return (
    <div className={`bg-white rounded-lg border border-border overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/5">
              {columns.map((column) => (
                <th key={column.key} className="text-left py-4 px-4 font-bold text-foreground">
                  <div className="space-y-2">
                    <div className="font-bold text-sm">{column.label}</div>
                    {column.filter && (
                      <div className="w-full">
                        {column.filter.type === 'search' ? (
                          <div className="relative">
                            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary\" size={14} />
                            <input
                              type="text"
                              placeholder={column.filter.placeholder || 'Search...'}
                              className="w-full pl-7 pr-3 py-1.5 text-xs border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary/20"
                              value={filters[column.key] || ''}
                              onChange={(e) => handleFilterChange(column.key, e.target.value)}
                            />
                          </div>
                        ) : (
                          <div className="relative">
                            <select
                              className="w-full px-2 py-1.5 text-xs border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary/20 appearance-none bg-white"
                              value={filters[column.key] || ''}
                              onChange={(e) => handleFilterChange(column.key, e.target.value)}
                            >
                              <option value="">Select</option>
                              {column.filter.options?.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" size={12} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
              <th className="text-left py-4 px-4 font-bold text-foreground">
                <div className="font-bold text-sm">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border-b border-border hover:bg-secondary/5 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="py-3 px-4 text-sm">
                    {column.render 
                      ? column.render(row[column.key], row)
                      : row[column.key] || '-'
                    }
                  </td>
                ))}
                <td className="py-3 px-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewProject?.(row)}
                    icon={<Eye size={14} />}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PmFilterableTable;
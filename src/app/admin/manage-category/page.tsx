"use client";
import ActionHeader from "@/components/ui/ActionHeader/ActionHeader";
import React, { useState } from "react";

const ManageCategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
      <ActionHeader
        setSearchTerm={setSearchTerm}
        label="Categories"
        href="/admin/manage-category/create"
      />
    </div>
  );
};

export default ManageCategoryPage;

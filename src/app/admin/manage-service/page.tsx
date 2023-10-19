"use client";
import ActionHeader from "@/components/ui/ActionHeader/ActionHeader";
import React, { useState } from "react";

const ManageServicePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div>
      <ActionHeader
        setSearchTerm={setSearchTerm}
        label="Services"
        href="/admin/manage-service/create"
      />
    </div>
  );
};

export default ManageServicePage;

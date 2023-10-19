"use client";
import ActionHeader from "@/components/ui/ActionHeader/ActionHeader";
import React, { useState } from "react";

const ManageUserPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div>
      <ActionHeader
        setSearchTerm={setSearchTerm}
        label="Users"
        href="/admin/manage-user/create"
      />
    </div>
  );
};

export default ManageUserPage;

"use client";

import React, { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  description: string;
}

export default function SkillCard({ name, icon, description }: SkillCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="text-gray-900 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

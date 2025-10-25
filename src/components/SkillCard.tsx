"use client";

import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export default function SkillCard({ name, icon, description }: SkillCardProps) {
  return (
    <div className="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

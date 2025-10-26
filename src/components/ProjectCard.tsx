"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  deployedUrl?: string; // Optional deployed URL
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  deployedUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* GitHub icon that appears on hover */}
        <div className="absolute top-0 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="p-2" title="View on GitHub">
            <FaGithub className="w-10 h-10 text-white drop-shadow-lg" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        {deployedUrl && (
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline mb-3 block"
          >
            {deployedUrl}
          </a>
        )}
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

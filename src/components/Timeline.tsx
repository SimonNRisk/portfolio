import { TimelineItem } from "./TimelineItem";

interface TimelineData {
  title: string;
  company: string;
  companyUrl: string;
  details: string;
  year: string;
  image: string;
  startDate: string;
  endDate: string;
}

interface TimelineProps {
  data: TimelineData[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

      {/* Timeline items */}
      <div className="space-y-8">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            company={item.company}
            companyUrl={item.companyUrl}
            details={item.details}
            year={item.year}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

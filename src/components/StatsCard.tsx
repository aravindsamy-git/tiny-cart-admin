
import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatsCardProps) => {
  const renderTrendIcon = () => {
    if (!trend) return null;
    
    return trend === 'up' ? (
      <span className="inline-flex items-center text-green-600">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        {trendValue}
      </span>
    ) : trend === 'down' ? (
      <span className="inline-flex items-center text-red-600">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        {trendValue}
      </span>
    ) : (
      <span className="inline-flex items-center text-gray-600">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
        </svg>
        {trendValue}
      </span>
    );
  };

  return (
    <div className={cn(
      "glass-card p-6 rounded-xl animate-fadeIn",
      className
    )}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      {(description || trend) && (
        <div className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
          <span>{description}</span>
          {renderTrendIcon()}
        </div>
      )}
    </div>
  );
};

export default StatsCard;

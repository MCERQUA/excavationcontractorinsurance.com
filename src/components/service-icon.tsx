import {
  Shield,
  AlertTriangle,
  HardHat,
  Truck,
  Wrench,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Shield,
  AlertTriangle,
  HardHat,
  Truck,
  Wrench,
  Umbrella,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Shield;
  return <Icon className={className} />;
}

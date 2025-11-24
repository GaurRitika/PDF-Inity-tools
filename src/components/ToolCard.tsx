import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  route: string;
}

const ToolCard = ({ icon: Icon, title, description, route }: ToolCardProps) => {
  return (
    <Link
      to={route}
      className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-base hover:scale-105 hover:border-primary/50"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-base">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ToolCard;
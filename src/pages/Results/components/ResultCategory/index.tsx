import { useEffect, useMemo, useState } from "react";
import { Result } from "hooks/useResults";
import styles from "../../Results.module.css";
import { TableCell, TableRow } from "../../../../components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const ResultCategory = ({
  result: { description, name, rank, score },
}: {
  result: Result;
}) => {
  const isDescriptionExpandedByDefault = useMemo<boolean>(
    () => rank <= 3,
    [rank]
  );
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(
    isDescriptionExpandedByDefault
  );

  // Use an effect to update the state if the rank changes
  useEffect(() => {
    setIsDescriptionExpanded(isDescriptionExpandedByDefault);
  }, [isDescriptionExpandedByDefault]);

  return (
    <Collapsible asChild open={isDescriptionExpanded}>
      <>
        <TableRow>
          <TableCell className="flex flex-row font-bold">
            <CollapsibleTrigger
              asChild
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              <ChevronDown className="mr-4 w-4 h-4" />
            </CollapsibleTrigger>
            {name}
          </TableCell>
          <TableCell className="text-right">{score}</TableCell>
          <TableCell className="text-right">{rank}</TableCell>
        </TableRow>
        <CollapsibleContent asChild>
          <TableRow>
            <TableCell colSpan={3} className="text-xs">
              {description}
            </TableCell>
          </TableRow>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default ResultCategory;

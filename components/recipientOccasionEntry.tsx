import { memo } from "react";
import { OccasionFrontendModel } from "../types/frontendModels";

interface Props {
  occasion: OccasionFrontendModel;
}

export const RecipientOccasionEntry = memo(function RecipientOccasionEntry({
  occasion,
}: Props) {
  if (!occasion.message) {
    return null;
  }

  return <p>{occasion.message}</p>;
});

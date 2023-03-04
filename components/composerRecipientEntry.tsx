import { observer } from "mobx-react-lite";
import { ComposerFormStore } from "../store/composerFormStore";
import { RecipientFrontendModel } from "../types/frontendModels";
import { ComposerOccasionEntry } from "./composerOccasionEntry";

interface Props {
  recipient: RecipientFrontendModel;
  composerFormStore: ComposerFormStore;
}

export const ComposerRecipientEntry = observer(function ComposerRecipientEntry({
  recipient,
  composerFormStore,
}: Props) {
  return (
    <div>
      <h1>Recipient: {recipient.name}</h1>
      {recipient.occasions.map((savedOccasion) => {
        const occasion = composerFormStore.occasionsById.get(savedOccasion.id);
        if (!occasion) return null;

        return <ComposerOccasionEntry key={occasion.id} occasion={occasion} />;
      })}
    </div>
  );
});

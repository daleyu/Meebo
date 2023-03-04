import { observer } from "mobx-react-lite";
import { RecipientButton } from "../layouts/proxyform.style";
import { ProxyFormStore } from "../store/proxyFormStore";
import { ProxyRecipientEntry } from "./proxyRecipientEntry";
interface Props {
  proxyFormStore: ProxyFormStore;
}

export const ProxyRecipientsForm = observer(function ProxyRecipientsForm({
  proxyFormStore,
}: Props) {
  console.log("here");
  return (
    <div>
      {proxyFormStore.recipients.map((recipient, index) => (
        <ProxyRecipientEntry key={index} recipient={recipient} />
      ))}
      <RecipientButton
        onClick={() => {
          proxyFormStore.addRecipient();
        }}
      >
        Add recipient
      </RecipientButton>
    </div>
  );
});

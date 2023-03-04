import { observer } from "mobx-react-lite";
import {
  OccasionButton,
  RecipientName,
  TextArea,
} from "../layouts/proxyform.style";
import { Recipient } from "../store/proxyFormStore";
import { ProxyOccasionEntry } from "./proxyOccasionEntry";

interface Props {
  recipient: Recipient;
}

export const ProxyRecipientEntry = observer(function ProxyRecipientEntry({
  recipient,
}: Props) {
  return (
    <div>
      <div>
        <label>
          <RecipientName>Recipient name:</RecipientName>
          <TextArea
            type="text"
            value={recipient.name}
            onChange={(event) => {
              recipient.name = event.target.value;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          <RecipientName>Email:</RecipientName>
          <TextArea
            type="text"
            value={recipient.email}
            onChange={(event) => {
              recipient.email = event.target.value;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          <RecipientName>Phone:</RecipientName>
          <TextArea
            type="text"
            value={recipient.phone}
            onChange={(event) => {
              recipient.phone = event.target.value;
            }}
          />
        </label>
      </div>
      <OccasionList recipient={recipient} />
    </div>
  );
});

const OccasionList = observer(function OccasionList({
  recipient,
}: {
  recipient: Recipient;
}) {
  return (
    <div>
      {recipient.occasions.map((occasion, index) => (
        <ProxyOccasionEntry key={index} occasion={occasion} />
      ))}
      <OccasionButton
        onClick={() => {
          const now = new Date();
          recipient.addOccasion(now);
        }}
      >
        Add occasion
      </OccasionButton>
    </div>
  );
});

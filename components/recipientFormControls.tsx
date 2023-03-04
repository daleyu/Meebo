import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { RecipientFrontendModel } from "../types/frontendModels";

interface Props {
  recipient: RecipientFrontendModel;
  page: number;
}

export const RecipientFormControls = observer(function RecipientFormControls({
  recipient,
  page,
}: Props) {
  const router = useRouter();

  const hasPrev = page > 1;
  const hasNext = page < recipient.occasions.length;

  return (
    <div>
      <button
        onClick={() => {
          router.push(`/view/${recipient.id}/${page - 1}`);
        }}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => {
          router.push(`/view/${recipient.id}/${page + 1}`);
        }}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
});

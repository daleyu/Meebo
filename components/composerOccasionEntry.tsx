import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { fetchApi } from "../lib/fetchApi";
import { Occasion } from "../store/composerFormStore";

interface Props {
  occasion: Occasion;
}

export const ComposerOccasionEntry = observer(function ComposerOccasionEntry({
  occasion,
}: Props) {
  const router = useRouter();

  const save = () => {
    fetchApi(`/api/occasion/${occasion.id}`, "PATCH", {
      message: occasion.message.length > 0 ? occasion.message : null,
    }).then(() => {
      router.reload();
    });
  };

  return (
    <div>
      <h2>Occasion: {occasion.label}</h2>
      <textarea
        value={occasion.message}
        onChange={(event) => {
          occasion.setMessage(event.target.value);
        }}
      />
      <p>{occasion.saved ? "Saved" : "Unsaved"}</p>
    </div>
  );
});

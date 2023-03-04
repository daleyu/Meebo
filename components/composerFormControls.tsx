import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { fetchApi } from "../lib/fetchApi";
import { ComposerFormStore } from "../store/composerFormStore";
import { ComposerFrontendModel } from "../types/frontendModels";

interface Props {
  composer: ComposerFrontendModel;
  page: number;
  composerFormStore: ComposerFormStore;
}

export const ComposerFormControls = observer(function ComposerFormControls({
  composer,
  page,
  composerFormStore,
}: Props) {
  const router = useRouter();

  const hasPrev = page > 1;
  const hasNext = page < composer.recipients.length;

  const { hasUnsavedOccasions, progress } = composerFormStore;

  const handleSaveAll = async () => {
    for (const occasion of composerFormStore.unsavedOccasions) {
      // TODO bad await in for loop (here to not overload db)
      await fetchApi(`/api/occasion/${occasion.id}`, "PATCH", {
        message: occasion.message.length > 0 ? occasion.message : null,
      });
    }

    router.reload();
  };

  return (
    <div>
      <button
        onClick={() => {
          router.push(`/compose/${composer.id}/${page - 1}`);
        }}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button onClick={handleSaveAll} disabled={!hasUnsavedOccasions}>
        {hasUnsavedOccasions ? "Save all" : "All saved"}
      </button>
      <button
        onClick={() => {
          router.push(`/compose/${composer.id}/${page + 1}`);
        }}
        disabled={!hasNext}
      >
        Next
      </button>
      Progress: {progress.completed}/{progress.total}
    </div>
  );
});

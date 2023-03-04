import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { ProxyNameForm } from "../../components/proxyNameForm";
import { ProxyRecipientsForm } from "../../components/proxyRecipientsForm";
import {
  CenterDiv,
  NextButton,
  PrevSubmitButton,
} from "../../layouts/proxy.style";
import { SplitLayout } from "../../layouts/splitLayout";
import { fetchApi } from "../../lib/fetchApi";
import { ProxyFormStore } from "../../store/proxyFormStore";
import { ComposerFrontendModel } from "../../types/frontendModels";

type Step = "home" | "pet";

function getNextStep(step: unknown): Step | null {
  switch (step) {
    case "home":
      return "pet";
    default:
      return null;
  }
}

function getPrevStep(step: unknown): Step | null {
  switch (step) {
    case "pet":
      return "home";
    default:
      return null;
  }
}

const Proxy: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;

  const [proxyFormStore] = useState(() => new ProxyFormStore());

  const handleSubmit = () => {
    fetchApi<ComposerFrontendModel>(
      "/api/composer",
      "POST",
      proxyFormStore.composerRequestBody
    ).then((res) => {
      const { id, name } = res;
      router.push(`/proxy/done?composerId=${id}&composerName=${name}`);
    });
  };

  let formElement: ReactNode;

  switch (step) {
    case "pet":
      formElement = <ProxyNameForm proxyFormStore={proxyFormStore} />;
      break;
    case "thing":
      formElement = <ProxyRecipientsForm proxyFormStore={proxyFormStore} />;
      break;
    default:
      formElement = <>Error: invalid step</>;
  }

  const nextStep = getNextStep(step);
  const prevStep = getPrevStep(step);

  const canSubmit = step === "pet";

  const main = (
    <>
      {formElement}
      {nextStep && (
        <CenterDiv>
          <NextButton
            onClick={() => {
              router.push(`/home/${nextStep}`);
            }}
          >
            Next
          </NextButton>
        </CenterDiv>
      )}
      {prevStep && (
        <div>
          <PrevSubmitButton
            onClick={() => {
              router.push(`/home/${prevStep}`);
            }}
          >
            Previous
          </PrevSubmitButton>
        </div>
      )}
      {canSubmit && (
        <div>
          <PrevSubmitButton onClick={handleSubmit}>Submit</PrevSubmitButton>
        </div>
      )}
    </>
  );

  let sidebar;

  return <SplitLayout sidebar={sidebar} main={main} />;
};

export default Proxy;

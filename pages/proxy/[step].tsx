import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { ProxyNameForm } from "../../components/proxyNameForm";
import { ProxyRecipientsForm } from "../../components/proxyRecipientsForm";
import {
  CenterDiv,
  NextButton,
  PrevSubmitButton,
  SideContainer,
  SideText,
  TextSideContainer,
} from "../../layouts/proxy.style";
import { SplitLayout } from "../../layouts/splitLayout";
import { fetchApi } from "../../lib/fetchApi";
import { ProxyFormStore } from "../../store/proxyFormStore";
import { ComposerFrontendModel } from "../../types/frontendModels";

type Step = "name" | "recipients";

function getNextStep(step: unknown): Step | null {
  switch (step) {
    case "name":
      return "recipients";
    default:
      return null;
  }
}

function getPrevStep(step: unknown): Step | null {
  switch (step) {
    case "recipients":
      return "name";
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
    case "name":
      formElement = <ProxyNameForm proxyFormStore={proxyFormStore} />;
      break;
    case "recipients":
      formElement = <ProxyRecipientsForm proxyFormStore={proxyFormStore} />;
      break;
    default:
      formElement = <>Error: invalid step</>;
  }

  const nextStep = getNextStep(step);
  const prevStep = getPrevStep(step);

  const canSubmit = step === "recipients";

  const main = (
    <>
      {formElement}
      {nextStep && (
        <CenterDiv>
          <NextButton
            onClick={() => {
              router.push(`/proxy/${nextStep}`);
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
              router.push(`/proxy/${prevStep}`);
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

  switch (step) {
    case "name":
      sidebar = (
        <div>
          <SideContainer>
            <p style={{ fontSize: 100, margin: 0 }}></p>
            <TextSideContainer>
              <SideText>
                <b>👋 Let's get started on creating your memory capsule!</b>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                🥰 Who will be composing the lovely message(s)?
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                🖼 What will your capsule look like?
              </SideText>
            </TextSideContainer>
          </SideContainer>
        </div>
      );
      break;
    case "recipients":
      sidebar = (
        <div>
          <SideContainer>
            <p style={{ fontSize: 100, margin: 0 }}></p>
            <TextSideContainer>
              <SideText>
                <b> 🙆 For whom would you like to capture this capsule? </b>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <b> 📅 When would you like them to receive your message(s)? </b>
              </SideText>
            </TextSideContainer>
          </SideContainer>
        </div>
      );
      break;
  }

  return <SplitLayout sidebar={sidebar} main={main} />;
};

export default Proxy;

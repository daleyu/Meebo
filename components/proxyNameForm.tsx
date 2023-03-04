import { observer } from "mobx-react-lite";
import Image from "next/image";
import {
  CenteringDiv,
  CenteringSection,
  InputButton,
  TextArea,
  WhiteSpace,
} from "../layouts/proxyName.style";
import logo from "../public/images/logo.png";
import { ProxyFormStore } from "../store/proxyFormStore";
interface Props {
  proxyFormStore: ProxyFormStore;
}

export const ProxyNameForm = observer(function ProxyNameForm({
  proxyFormStore,
}: Props) {
  return (
    <CenteringSection>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label>
            <Image src={logo} layout="responsive" />
            <InputButton>Proxy Name:</InputButton>
            <CenteringDiv>
              <TextArea
                type="text"
                value={proxyFormStore.proxyName}
                onChange={(event) => {
                  proxyFormStore.proxyName = event.target.value;
                }}
              />
            </CenteringDiv>
          </label>
        </div>

        <div>
          <label>
            <InputButton>Composer Name:</InputButton>
            <CenteringDiv>
              <TextArea
                type="text"
                value={proxyFormStore.composerName}
                onChange={(event) => {
                  proxyFormStore.composerName = event.target.value;
                }}
              />
            </CenteringDiv>
          </label>
        </div>
        <WhiteSpace></WhiteSpace>
      </form>
    </CenteringSection>
  );
});

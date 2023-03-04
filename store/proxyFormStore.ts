import { makeAutoObservable } from "mobx";
import { ComposerRequestBody } from "../types/requestBodies";

export class ProxyFormStore {
  composerName = "";
  proxyName = "";
  recipients: Recipient[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addRecipient() {
    this.recipients.push(new Recipient());
  }

  get composerRequestBody(): ComposerRequestBody {
    return {
      name: this.composerName,
      proxyName: this.proxyName,
      recipients: this.recipients.map((recipient) => ({
        name: recipient.name,
        email: recipient.email.length > 0 ? recipient.email : null,
        phone: recipient.phone.length > 0 ? recipient.phone : null,
        occasions: recipient.occasions.map((occasion) => ({
          label: occasion.label,
          date: occasion.date.toISOString(),
        })),
      })),
    };
  }
}

export class Recipient {
  name = "";
  email = "";
  phone = "";
  occasions: Occasion[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addOccasion(defaultDate: Date) {
    this.occasions.push(new Occasion(defaultDate));
  }
}

export class Occasion {
  label = "";
  date: Date;

  constructor(defaultDate: Date) {
    this.date = defaultDate;
    makeAutoObservable(this);
  }
}

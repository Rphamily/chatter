export class Order {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        aReturn.push("Welcome to Ryan's Viet Resto.");
        aReturn.push("Would you like to order Pho, Bun Bo Hue, or Bun Rieu? (Please type pho, bunbo, or bunrieu to reserve)");
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        let d = new Date();
        d.setMinutes(d.getMinutes() + 120);
        this.isOrderDone = true;

        if (sInput.toLowerCase().startsWith('pho')) {
          aReturn.push(`Your Pho is reserved ${this.sFrom}`);
        } else if (sInput.toLowerCase().startsWith('bunbo')) {
          aReturn.push(`Your Bun Bo Hue is reserved ${this.sFrom}`);
        } else if (sInput.toLowerCase().startsWith('bunrieu')) {
          aReturn.push(`Your Bun Rieu is reserved ${this.sFrom}`);
        } else {
          aReturn.push("Thank you!");
          aReturn.push("Maybe next time you'll decide to order :)");
          this.isOrderDone = false;
        }

        if (this.isOrderDone) {
          aReturn.push(`Please pick it up at 123 Tidy St. at ${d.toTimeString()}`);
        }

        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isOrderDone = false;
    this.sFrom = sFrom;
  }

  handleInput(sInput) {
    return this.stateCur(sInput);
  }

  isDone() {
    return this.isOrderDone;
  }
}

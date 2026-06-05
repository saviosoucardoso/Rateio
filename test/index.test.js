import { update } from "../index.js";

test("A função de atualização deve calcular a gorjeta e o total corretamente.", () => {
   /**
    * arrow function
    * 
    * teste unitário com DOM mockado    
    */
    document.body.innerHTML = `
        <input id="yourBill" value="100">
        <input id="tipInput" value="15">    
        <input id="splitInput" value="4">

    <span id="tipPercent"></span>
    <span id="tipValue"></span>
    <span id="totalWithTip"></span>
    <span id="splitValue"></span>
    <span id="billEach"></span>
    <span id="tipEach"></span>
    `;
 update();

  expect(document.getElementById("tipPercent").innerHTML).toBe("15%");
  expect(document.getElementById("tipValue").innerHTML).toBe("R$ 15");
  expect(document.getElementById("totalWithTip").innerHTML).toBe("R$ 115");
  expect(document.getElementById("splitValue").innerHTML).toBe("4");
  expect(document.getElementById("billEach").innerHTML).toBe("115 / 4 = R$ 28.75");
});

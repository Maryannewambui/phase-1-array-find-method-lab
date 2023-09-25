// code your solution here
const record = [
    //...
]

function superbowlWin() {
        const ans = record.find(object => object.result === "W");
        if (ans) {
          return ans.year;
        } else {
          return undefined;
        }
      }
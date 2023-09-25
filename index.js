// code your solution here
function superbowlWin(record) {
        const ans = record.find(object  => object.result === "W");
        if (ans) {
          return ans.year;
        } else {
          return undefined;
        }
      }
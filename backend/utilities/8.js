const level8Util = (finalArray, memberId) => {
  let finalIncentives = [];

  if (finalArray.length === 1) {
    if (finalArray[0].branch === "branchA" || finalArray[0].branch === "branchB") {
      let data = { memberId: memberId, money: 10 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 5 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 2) {
    if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level8Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 5 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 0 };
      finalIncentives.push(data);
    }
  }

  return finalIncentives;
};

module.exports = { level8Util };

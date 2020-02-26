
import './style.css';
var acctData = [
        {
          acctNum: "AAA - 1234",
          user: "Alice"
        },
        {
          acctNum: "AAA - 5231",
          user: "Bob"
        },
        {
          acctNum: "AAA - 9921",
          user: "Alice"
        },
        {
          acctNum: "AAA - 8191",
          user: "Alice"
        }
      ];
      var balance = {
        "AAA - 1234": 4593.22,
        "AAA - 9921": 0,
        "AAA - 5231": 232142.5,
        "AAA - 8191": 4344
      };
      function userAccounts(user, sortby, sortDir) {
        var outputArr = [];
        if (user !== null && sortby === "acctNum") {
          for (let i = 0; i < acctData.length; i++) {
            if (acctData[i].user === user) {
              outputArr.push(acctData[i].acctNum);
            }
          }
        } else if (user === null && sortby === "acctNum") {
          for (let i = 0; i < acctData.length; i++) {
            outputArr.push(acctData[i].acctNum);
          }
        } else {
          outputArr = Object.keys(balance).sort(function(a, b) {
            return balance[a] - balance[b];
          });
        }
        if (sortDir === null || sortDir === "asc") {
          outputArr.sort();
        } else if (sortDir === "desc") {
          outputArr.sort().reverse();
        }
        return outputArr;
      }
      console.log("filtered by Bob", userAccounts("Bob", "acctNum", null));
      console.log(
        "filtered by Charlie",
        userAccounts("Charlie", "acctNum", "desc")
      );
      console.log(
        "Sorted by AcctNum desc",
        userAccounts(null, "acctNum", "desc")
      );
      console.log(
        "Sorted by AcctNum asc",
        userAccounts(null, "acctNum", "asc")
      );
      console.log(
        "Sorted by balance asc",
        userAccounts(null, "balance", "asc")
      );
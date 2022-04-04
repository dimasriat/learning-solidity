// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
    /** @dev unset --> default value count = 0 */
    uint256 public count;

    /** @dev berguna untuk  mengambil data count*/
    function getCount() public view returns (uint256) {
        return count;
    }

    /** @dev berguna untuk increment nilai count sebanyak 1 */
    function incrementCount() public {
        count += 1;
    }

    /** @dev berguna untuk decrement nilai count sebanyak 1 */
    function decrementCount() public {
        count -= 1;
    }
}

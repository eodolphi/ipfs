contract ImpactBadge {
    struct Badge {
        string what;
        string where;
        string when;
    }

    address public owner;
    mapping (address => int) public badgesOf;

    function ImpactBadge() {
        owner = msg.sender;
    }

    function create(address recipient, string action, string url)
        returns (bool success) {
        badgesOf[recipient] += 1;

        return true;
    }
}

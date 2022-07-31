// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Vote {
    struct Voter {
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }

    struct Candidate {
        string name;
        uint voteCount;
    }

    address public approver;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    constructor(string[] memory candidatesNames) {
        approver = msg.sender;
        voters[approver].weight = 1;
        for(uint i = 0; i < candidatesNames.length; i++) {
            candidates.push(Candidate({
                name: candidatesNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint candidate) external {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "No tiene derecho a votar!");
        require(!sender.voted, "Ya se ha realizado el voto");
        sender.voted = true;
        sender.vote = candidate;
        candidates[candidate].voteCount += sender.weight;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}
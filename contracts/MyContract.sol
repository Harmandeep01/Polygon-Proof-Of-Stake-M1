// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyContract is ERC721URIStorage {
    address Owner ; 
    uint256 private _tokenId;

    mapping(uint256 => bool) private _tokenExists ;
    mapping(uint256 => string) private _prompts;

    constructor() ERC721("HermannToken", "HTK") {
        _tokenId = 0;
        Owner = msg.sender;
    }
    
    modifier onlyOwner () {
        require(msg.sender == Owner , "Unauthorized Access");
        _;
    }
    
    function mintNFT(address _to, string memory _tokenURI, string memory _prompt) 
    public onlyOwner returns (uint256) {
        _tokenId += 1;

        uint256 newTokenId = _tokenId;
        _mint(_to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        _tokenExists[newTokenId] = true ; 

        _prompts[newTokenId] = _prompt;

        return newTokenId;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(_tokenExists[tokenId], "ERC721: URI query for nonexistent token");
        return _prompts[tokenId];
    }
}

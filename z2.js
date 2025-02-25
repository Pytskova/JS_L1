function ipv4Parser(ip, mask) {

    let ipParts = ip.split('.').map(Number);
    let maskParts = mask.split('.').map(Number);

    let network = ipParts.map((part, i) => part & maskParts[i]).join('.');
    let host = ipParts.map((part, i) => part & ~maskParts[i]).join('.');

    return [network, host];
}





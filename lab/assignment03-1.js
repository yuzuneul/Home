<script>
    function binaryToDecimal() {
      var inputnum = prompt("2진수를 입력하시오")
      var parsed = parseInt(inputnum, 2);
      if (isNaN(parsed)) {
        return 0;}
    return parsed;
    }

    function decimalToHex(x){
        var hexadecimal =
        while(x>0){
            var rem=x%16;
            hexstr=hex[rem]+hexstr;
            x=x/16;
        }
    return hexstr;
    }

    function binaryToHex() {
        return decimalToHex(binaryToDecimal())
}
document.write(binaryToHex())
</script>
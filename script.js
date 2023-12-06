function main() {
    let angkaAcak = Math.floor(Math.random() * 10) + 1;
    let tebakanUser = prompt("Tebak apakah angka yang diacak ganjil atau genap (ganjil/genap):");
    const apakahGanjil = angkaAcak % 2 !== 0;
    let tebakanBenar = (apakahGanjil && tebakanUser.toLowerCase() === "ganjil") || (!apakahGanjil && tebakanUser.toLowerCase() === "genap");
  
    while (!tebakanBenar) {
      angkaAcak = Math.floor(Math.random() * 10) + 1;
      alert(`Maaf, tebakan Anda salah.`);
      tebakanUser = prompt("Tebak apakah angka yang diacak ganjil atau genap (ganjil/genap):");
      tebakanBenar = (apakahGanjil && tebakanUser.toLowerCase() === "ganjil") || (!apakahGanjil && tebakanUser.toLowerCase() === "genap");
    }
  
    alert(`Selamat, angka yang benar adalah ${angkaAcak}.`);
    let konfirmasi = prompt("Mau ulang? (ya/tidak)");
    if (konfirmasi.toLowerCase() === "ya") {
      main();
    } else {
      alert("Terima kasih sudah bermain");
    }
  }
  
  main();
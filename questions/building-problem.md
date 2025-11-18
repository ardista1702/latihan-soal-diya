Seorang arsitek ingin membuat gedung yang sangat tinggi. 
Gedung akan terdiri dari beberapa lantai, dan masing-masing lantai memiliki ukuran masing-masing. Ukuran dari sebuah lantai harus lebih besar dibandingkan lantai yang berada persis di atasnya.

Arsitek ini ingin memberikan warna garis-garis kepada bangunan dengan warna  HIJAU dan BIRU, setiap lantai memiliki warna sendiri, dan dua atau lebih lantai yang saling susun bisa memiliki warna yang sama, dan bisa juga berbeda. 

Arsitek ini memiliki n laintai yang bisa digunakan, masing-masing lantai memiliki ukuran dan warna. Semua lantai tidak ada yang sama ukurannya. Arsitek ini ingin membuat gedung dengan semua lantai yang ada dengan kondisi-kondisi tersebut.

- baris pertama berisi jumlah kasus yang akan di selesaikan.
- baris-baris berikutnya berisi kasus-kasus yang akan diselesaikan.
- Baris pertama setiap kasus adalah N jumlah lantai dalam kasus itu
- sebanyak N baris berikutnya adalah ukuran lantai yang tersedia
- Lantai dengan angka positive adalah lantai berwarna HIJAU, sedangkan lantai negative berwarna BIRU.
- Ukuran lantai adalah nilai absolute dari nilainya, misalkan -3 maka ukuran nya adalah 3 dan berwarna BIRU.
- ukuran lantai mulai dari 1-999999, tidak ada lantai dengan ukuran 0.
- Jumlah lantai yang tersedia setiap kasus maksimal sebanyak 500000 lantai (lima ratus ribu lantai)

CONTOH:
2
5
7
-2
6
9
-3
8
11
-9
2
5
18
17
-15
4

CONTOH OUTPUT ketika program di run:    
2
5

CATATAN:
- tidak boleh ada output selain angka solusi, jika baris pertama file kasus berisi angka 1, maka output hanya akan ada 1 baris saja, jika file input baris pertama berisi angka 6, maka akan ada 6 baris output yang dihasilkan.
- kelebihan karakter, atau output tidak sesuai (walaupun algoritma nya level dewa dan ajib banget) tetep akan membuat submission FAILED.
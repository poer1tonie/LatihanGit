<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil<br><br>";

// Query untuk mengambil data
$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);

// Mulai tabel HTML
echo "<table border='1' cellpadding='10' cellspacing='0'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>";

// Memeriksa apakah ada hasil
if ($result->num_rows > 0) {
    // Menampilkan data dalam baris tabel
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"]. "</td>
                <td>" . $row["name"]. "</td>
                <td>" . $row["email"]. "</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='3'>0 results</td></tr>";
}

// Akhiri tabel HTML
echo "</table>";

// Menutup koneksi
$conn->close();
?>

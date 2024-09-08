<?php
// Menghubungkan ke database
include 'db_connect.php';

// Menjalankan query untuk mengambil data dari tabel posts
$result = $conn->query("SELECT title, content FROM posts");

// Memeriksa apakah data tersedia
if ($result->num_rows > 0) {
    // Menampilkan setiap baris data
    while ($row = $result->fetch_assoc()) {
        echo "<h2>" . htmlspecialchars($row['title']) . "</h2>";
        echo "<p>" . nl2br(htmlspecialchars($row['content'])) . "</p>";
    }
} else {
    echo "No posts available.";
}

// Menutup koneksi
$conn->close();
?>

# Okıyıcı — Arayüz Ön Prototipi

Bu dal, **Okıyıcı ürün etiketi okuma uygulamasının başlangıç arayüzünü ve temel çalışma akışını** içermektedir.

## Mevcut Özellikler

- Barkod numarasını manuel olarak girme
- Örnek ürün verileri üzerinden sorgulama yapma
- Ürün adı, kategorisi, fiyatı ve stok durumunu görüntüleme
- Ürün bulunamadığında uyarı gösterme
- Son sorgulamaları listeleme ve sorgu geçmişini temizleme
- Mobil ekranlara uyumlu kullanıcı arayüzü

## Teknolojiler

- HTML
- CSS
- JavaScript

## Çalıştırma

`frontend/index.html` dosyasını bir web tarayıcısında açarak prototipi çalıştırabilirsiniz.

Örnek barkodlar:

- `8690000000001`
- `8690000000002`
- `1234567890123` — bulunamayan ürün senaryosu

## Geliştirme Durumu

Bu sürüm, kullanıcı arayüzünü ve temel sorgulama akışını göstermek amacıyla hazırlanmış bir ön prototiptir. Ürün bilgileri örnek verilerden alınmaktadır. Kamera ile barkod okuma, OpenCV/PyZbar entegrasyonu, REST API ve SQLite veritabanı bağlantısı henüz tamamlanmamıştır.

Bu dal, sonraki geliştirme aşamalarında gerçek ürün verileri ve barkod okuma bileşenleriyle genişletilmek üzere hazırlanmıştır.

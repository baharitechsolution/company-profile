import { UnifiedCtaBanner, UnifiedCtaBannerProps } from "./unified-cta-banner";

export function ConsultationCtaBanner(props: UnifiedCtaBannerProps) {
  return (
    <UnifiedCtaBanner
      eyebrow="KONSULTASI RESMI · CV. BAHARI TECH SOLUTION"
      title="Mulai Konsultasi & Wujudkan Solusi Digital Bisnis Anda"
      description="Diskusikan rencana pembuatan aplikasi web, sistem enterprise ERP, maupun aplikasi mobile bersama tim engineer kami. Kami siap mendampingi Anda memetakan kebutuhan teknis, arsitektur sistem, dan estimasi Rencana Anggaran Biaya (RAB) secara transparan tanpa ikatan kontrak awal."
      whatsappMessage="Halo Tim Konsultan Bahari Tech Solution, saya ingin konsultasi mengenai rencana pembuatan website / aplikasi / software untuk bisnis kami."
      consultationLink="/bantuan"
      consultationButtonText="Ajukan Konsultasi & RAB"
      whatsappButtonText="Chat Tim Engineer"
      {...props}
    />
  );
}

import {VipHero} from '@/components/demo/boda/vip/VipHero';
import {PremiumInvitation} from '@/components/demo/boda/premium/PremiumInvitation';
import {BasicCountdown} from '@/components/demo/boda/basic/BasicCountdown';
import {BasicEventDetails} from '@/components/demo/boda/basic/BasicEventDetails';
import {VipAccommodation} from '@/components/demo/boda/vip/VipAccommodation';
import {VipItinerary} from '@/components/demo/boda/vip/VipItinerary';
import {VipGuestPasses} from '@/components/demo/boda/vip/VipGuestPasses';
//import {VipPlaylist} from '@/components/demo/boda/vip/VipPlaylist';
import {VipGallery} from '@/components/demo/boda/vip/VipGallery';
import {PremiumPadrinos} from '@/components/demo/boda/premium/PremiumPadrinos';
import {BasicAttendance} from '@/components/demo/boda/basic/BasicAttendance';
import {BasicGiftOptions} from '@/components/demo/boda/basic/BasicGiftOptions';
import {PremiumThankYou} from '@/components/demo/boda/premium/PremiumThankYou';
import { MusicProvider } from '@/context/music-context'
import { VipMusicPlayer } from '@/components/demo/boda/vip/VipMusicPlayer'





export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <MusicProvider>
        <VipMusicPlayer />
     {/* 🌟 HERO VIP - Con música y branding exclusivo */}
           <VipHero />
     
           {/* 📋 INVITACIÓN COMPLETA - Heredada del premium */}
           <PremiumInvitation />
     
           {/* ⏰ CUENTA REGRESIVA - Heredada del básico */}
           <BasicCountdown />
     
           {/* 📅 CUÁNDO Y DÓNDE - Heredada del básico */}
           <BasicEventDetails />
     
           {/* 🏨 HOSPEDAJE RECOMENDADO - CARACTERÍSTICA VIP EXCLUSIVA */}
           <VipAccommodation />
     
           {/* 📅 ITINERARIO COMPLETO - CARACTERÍSTICA VIP EXCLUSIVA */}
           <VipItinerary />
     
           {/* 🎫 PASES DE INVITADOS - CARACTERÍSTICA VIP EXCLUSIVA */}
            <VipGuestPasses /> 
     
           {/* 🎵 PLAYLIST MÚLTIPLE - CARACTERÍSTICA VIP ENHANCED */}
           {/* <VipPlaylist /> */}
     
           {/* 📸 GALERÍA CATEGORIZADA - CARACTERÍSTICA VIP ENHANCED */}
           <VipGallery />
     
           {/* 👥 PADRINOS - Heredada del premium */}
           <PremiumPadrinos />
     
           {/* ✅ CONFIRMACIÓN DE ASISTENCIA - Heredada del básico */}
           <BasicAttendance />
     
           {/* 🎁 OPCIONES DE REGALO - Heredada del básico */}
           <BasicGiftOptions />
     
           {/* 💝 MENSAJE FINAL - Heredada del premium */}
           <PremiumThankYou />
           </MusicProvider >
    </div>
  )
}

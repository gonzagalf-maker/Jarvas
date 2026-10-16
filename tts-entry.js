
import { TextToSpeech } from '@capacitor-community/text-to-speech';

window.JarvasTTS = {
  speak: (text, rate = 1) =>
    TextToSpeech.speak({
      text,
      lang: 'pt-BR',
      rate,
      pitch: 1,
      volume: 1
    }),

  stop: () => TextToSpeech.stop()
};

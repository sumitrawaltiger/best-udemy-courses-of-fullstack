import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CAMERA_DOCS = 'https://docs.expo.dev/versions/latest/sdk/camera/';
const AUDIO_DOCS = 'https://docs.expo.dev/versions/latest/sdk/audio/';
const MEDIA_DOCS = 'https://docs.expo.dev/versions/latest/sdk/media-library/';

const LEARNT_TODAY = [
  { title: 'Expo Camera', text: 'the <CameraView> component shows a live preview and captures photos or video' },
  { title: 'Permissions', text: 'camera, mic and media access must be requested at runtime with a permission hook' },
  { title: 'Take a photo', text: 'a ref on CameraView exposes takePictureAsync to capture a still' },
  { title: 'Record video', text: 'recordAsync / stopRecording capture clips with the same camera ref' },
  { title: 'Audio recording', text: 'expo-audio records from the mic and plays back sound files' },
  { title: 'Audio playback', text: 'load a sound, play, pause and unload it to free memory' },
  { title: 'Media Library', text: 'expo-media-library saves captures to the device gallery and reads existing media' },
  { title: 'Front/back & flash', text: 'toggle facing and flash mode for a real camera UI' },
  { title: 'DevLog project', text: 'the day’s build — a video journal that records and saves daily clips' },
];

const CAMERA = [
  {
    icon: '📷', title: 'Camera Preview', titleClass: 'card-title-cyan', subtitle: 'Live Viewfinder',
    description: 'CameraView renders a live camera preview. Request permission with the useCameraPermissions hook first, then show the view once access is granted.',
    code: 'import { CameraView, useCameraPermissions } from "expo-camera";\n\nconst [perm, requestPerm] = useCameraPermissions();\nif (!perm?.granted) return <Button onPress={requestPerm} title="Allow" />;\nreturn <CameraView style={{ flex: 1 }} facing="back" />;',
  },
  {
    icon: '📸', title: 'Capture Photos & Video', titleClass: 'card-title-purple', subtitle: 'Via A Ref',
    description: 'Attach a ref to CameraView and call takePictureAsync for a still, or recordAsync / stopRecording for video. Each returns a uri you can preview or save.',
    code: 'const cam = useRef(null);\nconst photo = await cam.current.takePictureAsync();\n// photo.uri → show it or save it\nconst video = await cam.current.recordAsync();',
  },
  {
    icon: '🔄', title: 'Facing & Flash', titleClass: 'card-title-amber', subtitle: 'A Real Camera UI',
    description: 'Toggle the front/back camera with the facing prop and control the light with flash mode — the controls users expect from a native camera screen.',
    code: 'const [facing, setFacing] = useState("back");\n<CameraView facing={facing} flash="auto" />\n<Button title="Flip" onPress={() =>\n  setFacing(f => f === "back" ? "front" : "back")} />',
  },
];

const AUDIO_MEDIA = [
  {
    icon: '🎙️', title: 'Record Audio', titleClass: 'card-title-cyan', subtitle: 'From The Mic',
    description: 'expo-audio records from the microphone after a permission prompt. Start and stop a recording, then get back a file uri for playback or upload.',
    code: 'import { useAudioRecorder } from "expo-audio";\n\nconst recorder = useAudioRecorder();\nawait recorder.record();\n// later\nawait recorder.stop(); // → recording uri',
  },
  {
    icon: '🔊', title: 'Play Audio', titleClass: 'card-title-purple', subtitle: 'Load, Play, Unload',
    description: 'Load a sound file, play or pause it, and unload it when done to release memory. Works for recorded clips and bundled or remote audio.',
    code: 'import { useAudioPlayer } from "expo-audio";\n\nconst player = useAudioPlayer(uri);\nplayer.play();\nplayer.pause();',
  },
  {
    icon: '🖼️', title: 'Media Library', titleClass: 'card-title-amber', subtitle: 'Save To The Gallery',
    description: 'expo-media-library saves photos and videos to the device gallery and lists existing media — with its own permission for reading and writing.',
    code: 'import * as MediaLibrary from "expo-media-library";\n\nawait MediaLibrary.requestPermissionsAsync();\nawait MediaLibrary.saveToLibraryAsync(photo.uri);',
  },
  {
    icon: '📹', title: 'Project: DevLog', titleClass: 'card-title-lime', subtitle: 'Video Journal',
    description: 'The day’s build: a DevLog that records a short daily video, saves it to the media library, and lists past entries — camera, audio and storage working together.',
    code: '// record clip → save to library\n// list entries → play back\n// one tap per day = a video journal',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Permissions Done Right', titleClass: 'card-title-cyan', subtitle: 'Ask In Context',
    description: 'Request camera, microphone and media permissions when the user first needs them, explain why, and handle denial gracefully — a blocked permission should never crash the screen.',
    code: 'if (!perm?.granted) {\n  return <Explainer onAllow={requestPerm} />;\n}',
  },
  {
    icon: '🧹', title: 'Release Resources', titleClass: 'card-title-purple', subtitle: 'Free The Hardware',
    description: 'Cameras, recorders and players hold hardware. Stop recording and unload players when leaving the screen so the mic light turns off and memory is reclaimed.',
    code: 'useEffect(() => () => {\n  player.remove();      // unload audio\n  // stop any active recording\n}, []);',
  },
  {
    icon: '🔜', title: 'Next: Device APIs', titleClass: 'card-title-amber', subtitle: 'Day 110 Preview',
    description: 'Tomorrow: the rest of the phone — location, network state, battery, haptics and the document picker through Expo’s device & system APIs.',
    link: { href: '/day-110', label: 'Go to Day 110 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Expo Camera', titleClass: 'card-title-cyan', subtitle: 'API',
    description: 'The camera reference — CameraView, permissions, taking pictures, recording video, and controlling facing, zoom and flash.',
    link: { href: CAMERA_DOCS, label: 'Read camera docs →', external: true },
  },
  {
    icon: '🎙️', title: 'Expo Audio', titleClass: 'card-title-purple', subtitle: 'Record & Play',
    description: 'Recording from the mic and playing sound — the hooks, permissions, and lifecycle for audio in Expo.',
    link: { href: AUDIO_DOCS, label: 'Read audio docs →', external: true },
  },
  {
    icon: '🖼️', title: 'Media Library', titleClass: 'card-title-amber', subtitle: 'Gallery Access',
    description: 'Save captures to the gallery and read existing assets — permissions and the album/asset API.',
    link: { href: MEDIA_DOCS, label: 'Read media-library docs →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day109() {
  const scaleRef = useRef(null);
  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-108" className="day001-nav-btn day001-nav-prev">← Day 108</Link>
          <p className="day001-datetime">React Native Day 109 · 23 Sep 2027</p>
          <Link to="/day-110" className="day001-nav-btn day001-nav-next">Day 110 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Camera & Media</span><span>RN Day 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 109 <span aria-hidden="true">📷</span></h1>
              <p className="day001-day-theme">CAMERA, MEDIA &amp; AUDIO</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Day 109 captures the world. <strong>Expo Camera</strong>’s CameraView shows a live preview and — through a
          ref — takes <strong>photos</strong> and records <strong>video</strong>, with front/back and flash controls.{' '}
          <strong>expo-audio</strong> records from the mic and plays it back, and <strong>Media Library</strong> saves
          captures to the gallery. Everything sits behind runtime <strong>permissions</strong>. I tied it together in
          a <strong>DevLog</strong> video journal that records and saves a daily clip.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📷" title="1 · EXPO CAMERA" cards={CAMERA} columns={3} />
        <CardSection icon="🎙️" title="2 · AUDIO & MEDIA LIBRARY" cards={AUDIO_MEDIA} columns={4} />
        <CardSection icon="🧭" title="3 · PERMISSIONS & CLEANUP" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Camera</span><span>#ExpoAudio</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}

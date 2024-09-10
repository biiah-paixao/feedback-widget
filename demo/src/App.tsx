import { useState } from 'react';
import { Feedget } from '@webverse-tech/feedget'

type Size = 'small' | 'medium' | 'large'
type Theme = 'light' | 'dark'

function App() {
  const defaultThemeColor = '#8257e6'
  const [themeColor, setThemeColor] = useState(defaultThemeColor);
  const [textColor, setTextColor] = useState("");
  const [isEnabledName, setIsEnabledName] = useState(false);
  const [isEnabledEmail, setIsEnabledEmail] = useState(false);

  const [theme, setTheme] = useState<Theme>("dark");
  const [size, setSize] = useState<Size>("medium");

  const [discordWebhookUrl, setDiscordWebhookUrl] = useState("www.discord-webhook-url.com.br");

  return (
    <div className="max-w-5xl m-auto flex items-center justify-between gap-8">
      <div className="flex flex-col justify-center p-10 min-h-screen bg-zinc-900 text-zinc-50">
        <header className="mb-10 space-y-1">
          <h1 className="text-3xl font-bold">
            <a
              className="inline-flex items-center space-x-2 hover:underline"
              href="https://github.com/upstash/feedback"
              target="_blank"
            >
              <svg
                width="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span>webverse-tech/feedget</span>
            </a>
          </h1>
          <p className="text-zinc-400">
            A simple feedback widget for your website.
          </p>
        </header>

        <div className="grid grid-cols-2 items-center w-full max-w-2xl gap-x-2 gap-y-5 p-6 bg-zinc-800 rounded-xl">

          <span>themeColor</span>
          <input
            className='h-8 border-[1px] border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none'
            type="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />

          <span>textColor</span>
          <input
            className='h-8 border-[1px] border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none'
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />

          <span>size</span>
          <div className="flex items-center space-x-4 py-2">
            {["small", "medium", "large"].map((key) => (
              <label key={key} className="inline-flex items-center space-x-2">
                <input
                  className="form-radio"
                  type="radio"
                  name="size"
                  value={key}
                  checked={size === key}
                  onChange={(e) => setSize(e.target.value as Size)}
                />
                <span>{key}</span>
              </label>
            ))}
          </div>

          <span>backgroundTheme</span>
          <div className="flex items-center space-x-4 py-2">
            {["light", "dark"].map((key) => (
              <label key={key} className="inline-flex items-center space-x-2">
                <input
                  className="form-radio"
                  type="radio"
                  name="theme"
                  value={key}
                  checked={theme === key}
                  onChange={(e) => setTheme(e.target.value as Theme)}
                />
                <span>{key}</span>
              </label>
            ))}
          </div>

          <span>enabled input name</span>
          <div className="flex items-center space-x-4 py-2">
            <input className="form-checkbox"
              type="checkbox"
              name="name"
              checked={isEnabledName}
              onChange={() => setIsEnabledName(prevChecked => !prevChecked)}
            />{" "}
          </div>

          <span>enabled input email</span>
          <div className="flex items-center space-x-4 py-2">
            <input className="form-checkbox"
              type="checkbox"
              name="email"
              checked={isEnabledEmail}
              onChange={() => setIsEnabledEmail(prevChecked => !prevChecked)}
            />{" "}
          </div>

          <span>discord webhook url</span>
          <div className="flex items-center space-x-4 py-2">
            <input
              className='w-full mb-2 text-sm placeholder-text-secondary border-[1px] border-zinc-600 bg-transparent rounded-md focus:ring-1 focus:outline-none border-stroke'
              required
              type="text"
              placeholder='Digite o webhook do seu canal do discord'
              value={discordWebhookUrl}
              onChange={(e) => setDiscordWebhookUrl(e.target.value)}
            />
          </div>
        </div>

        <pre className="mt-8 p-6 w-full max-w-2xl bg-zinc-800 text-zinc-100 rounded-xl overflow-auto whitespace-pre">
          <code>
            &lt;Feedget<br />
            {themeColor !== 'defaultThemeColor' ? `  themeColor="${themeColor}"\n` : ''}
            {textColor ? `  textColor="${textColor}"\n` : ''}
            {size ? `  size="${size}"\n` : ''}
            {theme ? `  theme="${theme}"\n` : ''}
            {isEnabledName ? `  isEnabledName={${isEnabledName}}\n` : ''}
            {isEnabledEmail ? `  isEnabledEmail={${isEnabledEmail}}\n` : ''}
            {discordWebhookUrl ? `  discordWebhookUrl="${discordWebhookUrl}"\n` : ''}
            /&gt;
          </code>
        </pre>
      </div>
      <div className="flex flex-col justify-center min-h-screen pt-52">
        <Feedget
          themeColor={themeColor}
          textColor={textColor}
          size={size}
          theme={theme}
          isEnabledName={isEnabledName}
          isEnabledEmail={isEnabledEmail}
          discordWebhookUrl={discordWebhookUrl}
        />
      </div>
    </div>
  );
}

export default App

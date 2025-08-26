import { useEffect, useState } from 'react';
import { useCraftUI } from '@/contexts/CraftUIContext';

export default function CraftOfUI() {
  const { setActiveItem } = useCraftUI();
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the items data for easier reference
  const items = [
    {
      title: "Follow-ups already done",
      description: "End the call. The notes are written, the tasks assigned, responsibilities crystal clear.",
      subtitle: "Meeting ends, tasks appear",
      image: "/assets/moments/followups.png"
    },
    {
      title: "Answers without hunting", 
      description: "Just ask — PVLSE knows. No files. No tabs. No digging.",
      subtitle: "Ask a question, instant answer",
      image: "/assets/moments/answers.png"
    },
    {
      title: "Money clarity on tap",
      description: "See the truth in the numbers before anyone else does.",
      subtitle: "Financial snapshot appears", 
      image: "/assets/moments/money.png"
    },
    {
      title: "Inbox peace",
      description: "Emails turn into clear, simple actions — without you touching a spreadsheet.",
      subtitle: "Email thread becomes tasks",
      image: "/assets/moments/inbox.png"
    },
    {
      title: "C-suite on speed dial",
      description: "Your C-suite — without the scheduling, without the bottlenecks.",
      subtitle: "Instant executive guidance",
      image: "/assets/moments/csuite.png"
    }
  ];

  useEffect(() => {
    const list = document.querySelector('.craft-ui-list');
    const listItems = list?.querySelectorAll('li');
    
    if (!list || !listItems) return;

    const setIndex = (event: Event) => {
      const closest = (event.target as Element)?.closest('li');
      if (closest) {
        const index = [...listItems].indexOf(closest);
        const cols = new Array(list.children.length)
          .fill(null)
          .map((_, i) => {
            listItems[i].dataset.active = (index === i).toString();
            return index === i ? '10fr' : '1fr';
          })
          .join(' ');
        (list as HTMLElement).style.setProperty('grid-template-columns', cols);
        
        // Update the local state and context
        setActiveIndex(index);
        if (index >= 0 && index < items.length) {
          setActiveItem(items[index]);
        }
      }
    };

    const resync = () => {
      const w = Math.max(
        ...[...listItems].map((i) => {
          return i.offsetWidth;
        })
      );
      (list as HTMLElement).style.setProperty('--article-width', w.toString());
    };

    list.addEventListener('focus', setIndex, true);
    list.addEventListener('click', setIndex);
    list.addEventListener('pointermove', setIndex);
    window.addEventListener('resize', resync);
    
    resync();

    return () => {
      list.removeEventListener('focus', setIndex, true);
      list.removeEventListener('click', setIndex);
      list.removeEventListener('pointermove', setIndex);
      window.removeEventListener('resize', resync);
    };
  }, [items, setActiveItem]);

  // Set initial active item
  useEffect(() => {
    setActiveItem(items[0]);
    setActiveIndex(0);
  }, []);

  return (
    <div className="craft-ui-container">
      <style jsx>{`
        .craft-ui-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          padding-block: 2rem;
          font-family: Inter, -apple-system, system-ui, sans-serif;
        }

        .craft-ui-container h1,
        .craft-ui-container p {
          margin: 0;
        }

        .craft-ui-container h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 600;
          color: #F6F7FA;
          margin-bottom: 1rem;
        }

        .craft-ui-container > p {
          width: 74ch;
          max-width: calc(100% - 4rem);
          text-wrap: balance;
          margin-bottom: 4rem;
          line-height: 1.5;
          color: #C9CED6;
          font-weight: 400;
          text-align: center;
        }

        @media (max-width: 768px) {
          .craft-ui-container > p {
            text-align: center;
          }
        }

        .craft-ui-list li :is(svg, h3) {
          opacity: 0.6;
          transition: opacity calc(var(--speed, 0.6s) * 1.2) var(--easing);
        }


        .craft-ui-list li img {
          filter: grayscale(1) brightness(1.5);
          scale: 1.1;
          transition-property: filter, scale;
          transition-duration: calc(var(--speed, 0.6s) * 1.2);
          transition-timing-function: var(--easing);
        }

        .craft-ui-list [data-active='true'] :is(h3, svg) {
          opacity: var(--opacity, 1);
        }

        .craft-ui-list [data-active='true'] img {
          filter: grayscale(0) brightness(1);
          scale: 1;
          transition-delay: calc(var(--speed, 0.6s) * 0.25);
        }

        .craft-ui-list article {
          width: calc(var(--article-width) * 1px);
          height: 100%;
          position: absolute;
          font-family: Inter, -apple-system, system-ui, sans-serif;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1rem;
          padding-inline: calc(var(--base, 80px) * 0.5 - 9px);
          padding-bottom: 1rem;
          overflow: hidden;
        }

        .craft-ui-list article h3 {
          position: absolute;
          top: 1rem;
          left: calc(var(--base, 80px) * 0.5);
          transform-origin: 0 50%;
          rotate: 90deg;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          font-family: Inter, -apple-system, system-ui, sans-serif;
          color: #F6F7FA;
        }

        .craft-ui-list article svg {
          width: 18px;
          fill: none;
        }



        .craft-ui-list article img {
          position: absolute;
          pointer-events: none;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mask: radial-gradient(100% 100% at 100% 0, #fff, #0000);
        }

        .craft-ui-list {
          --gap: 8px;
          --base: clamp(2rem, 8cqi, 80px);
          --easing: linear(
            0 0%,
            0.1538 4.09%,
            0.2926 8.29%,
            0.4173 12.63%,
            0.5282 17.12%,
            0.6255 21.77%,
            0.7099 26.61%,
            0.782 31.67%,
            0.8425 37%,
            0.8887 42.23%,
            0.9257 47.79%,
            0.9543 53.78%,
            0.9752 60.32%,
            0.9883 67.11%,
            0.9961 75%,
            1 100%
          );
          --speed: 0.6s;
          display: grid;
          container-type: inline-size;
          grid-template-columns: 10fr 1fr 1fr 1fr 1fr;
          gap: var(--gap);
          list-style-type: none;
          justify-content: center;
          padding: 0;
          height: clamp(300px, 40dvh, 474px);
          margin: 0;
          width: 820px;
          max-width: calc(100% - 4rem);
          transition: grid-template-columns var(--speed) var(--easing);
        }

        .craft-ui-list li {
          background: #17181B;
          position: relative;
          overflow: hidden;
          min-width: var(--base, 80px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.06);
        }
      `}</style>

      <h1>The PVLSE Effect</h1>
      <p>
        It feels like this
      </p>
      
      <ul className="craft-ui-list">
        {items.map((item, index) => (
          <li key={item.title} data-active={index === 0 ? "true" : "false"}>
            <article>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.subtitle} />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
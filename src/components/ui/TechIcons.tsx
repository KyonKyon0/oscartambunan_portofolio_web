'use client';

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Next.js
export function NextjsIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <mask id="nextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="#fff" />
      </mask>
      <g mask="url(#nextMask)">
        <path
          d="M149.508 157.086L69.839 54H54V125.975H66.6975V69.9576L139.99 164.55C143.344 162.28 146.529 159.78 149.508 157.086Z"
          fill="url(#nextGrad)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
      </g>
      <defs>
        <linearGradient id="nextGrad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. React
export function ReactIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 3. TypeScript
export function TypeScriptIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M38 48h52v12H68v46H50V60H38V48zm47 31.7c3.8 2.2 8.4 3.7 13.2 3.7 5.1 0 7.9-2.2 7.9-5.4 0-3.3-2.6-4.9-8.7-7.2-9-3.4-14.8-7.8-14.8-15.5 0-9.2 7.6-15.6 19.8-15.6 6 0 10.7 1.3 14.2 3.1l-3.3 9.8c-2.8-1.5-6.5-2.7-10.9-2.7-4.8 0-7.3 2.1-7.3 4.9 0 3.1 2.7 4.6 9 7 9.5 3.6 14.7 8.3 14.7 15.9 0 9.7-7.7 16.1-20.9 16.1-6.9 0-12.7-1.7-16.5-3.8l3.3-10.3z"
      />
    </svg>
  );
}

// 4. JavaScript
export function JavaScriptIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M67.3 84.8c1.7 2.8 4 4.8 8.1 4.8 4.2 0 6.9-2.1 6.9-5 0-3.5-2.8-4.7-7.4-6.7l-2.6-1.1c-7.4-3.2-12.3-7.2-12.3-15.7 0-7.8 6-13.8 15.4-13.8 6.7 0 11.5 2.3 14.9 8.2l-6.5 4.2c-1.4-2.5-3.3-3.7-6.5-3.7-3.4 0-5.4 2.1-5.4 4.5 0 3.1 2.1 4.3 6.9 6.4l2.6 1.1c8.7 3.7 13.3 7.6 13.3 16.2 0 9.3-7.3 14.5-17.4 14.5-9.8 0-15.9-4.7-18.4-10.2l6.4-3.7zM36.1 84.3c1.5 2.6 2.8 4.8 6 4.8 3.3 0 5.4-1.3 5.4-6.4V48.5h8.6v34.4c0 9.5-5.5 14-13.9 14-7.5 0-11.8-3.9-14-8.8l7.9-3.8z"
      />
    </svg>
  );
}

// 5. Tailwind CSS
export function TailwindIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 28c-18 0-29.2 9-33.8 27 6.8-9 14.6-12.4 23.6-10.1 5.2 1.3 8.9 5.1 13 9.3C73.6 61.1 81.7 69.4 100 69.4c18 0 29.2-9 33.8-27-6.8 9-14.6 12.4-23.6 10.1-5.2-1.3-8.9-5.1-13-9.3C89.6 36.3 81.5 28 64 28zM30.2 64.9C12.2 64.9 1 73.9-3.6 91.9c6.8-9 14.6-12.4 23.6-10.1 5.2 1.3 8.9 5.1 13 9.3 6.8 6.9 14.9 15.2 33.2 15.2 18 0 29.2-9 33.8-27-6.8 9-14.6 12.4-23.6 10.1-5.2-1.3-8.9-5.1-13-9.3-6.8-6.9-14.9-15.2-33.2-15.2z"
        fill="#38BDF8"
      />
    </svg>
  );
}

// 6. Supabase
export function SupabaseIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 109 113"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.7076 110.284C60.848 113.885 55.0443 111.933 54.9081 107.351L52.8596 38.3845H96.1724C104.992 38.3845 109.878 48.6014 104.28 55.6517L63.7076 110.284Z"
        fill="#3ECF8E"
      />
      <path
        d="M45.317 2.50579C48.1766 -1.09544 53.9803 0.856649 54.1165 5.43851L56.165 74.4055H12.8522C4.03264 74.4055 -0.85324 64.1886 4.74474 57.1383L45.317 2.50579Z"
        fill="#249361"
      />
    </svg>
  );
}

// 7. PostgreSQL
export function PostgreSQLIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.9 14.5C36.6 14.5 14.5 36.6 14.5 63.9c0 20.3 12.3 37.8 29.8 45.3.6-2.5 1.5-6.2 1.6-9.7.1-4.8-.8-9.4-2.8-13.8-3.7-8.1-6.1-17.7-6.1-27.9 0-3.3.3-6.5.8-9.6 2.4 2.8 5.7 4.9 9.5 5.7 8.3 1.8 17.5-.7 23.3-6.6 2.9-2.9 4.8-6.6 5.5-10.7 2.7 3.5 6.7 5.8 11.2 6.3 7.8.9 15.3-2.9 19.3-9.5 1.6-2.6 2.5-5.6 2.8-8.8 4.4 7.6 7 16.4 7 25.8 0 14.3-5.9 27.2-15.4 36.4-1.9 1.8-3.5 3.9-4.8 6.2-2.1 3.7-3 8-2.6 12.3.2 2.6.9 5.3 1.7 7.7 18.2-7.2 31.1-25 31.1-45.7 0-27.3-22.1-49.4-49.5-49.4z"
        fill="#336791"
      />
      <path
        d="M67.8 77.2c-5.5 0-9.8 4.3-9.8 9.8 0 3.4 1.7 6.4 4.3 8.1 1.6 1 3.5 1.6 5.5 1.6 5.5 0 9.8-4.3 9.8-9.8 0-5.4-4.3-9.7-9.8-9.7z"
        fill="#4169E1"
      />
    </svg>
  );
}

// 8. MySQL
export function MySQLIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 16C37.5 16 16 37.5 16 64s21.5 48 48 48 48-21.5 48-48S90.5 16 64 16z"
        fill="#00758F"
        fillOpacity="0.1"
      />
      <path
        d="M87.2 62.4c-1.8-6.1-7.1-10.4-13.4-10.7-3.9-.2-7.6 1.2-10.5 3.7-2.9-2.5-6.6-3.9-10.5-3.7-6.3.3-11.6 4.6-13.4 10.7-1.3 4.3-.8 9.1 1.4 13.1 3.1 5.6 8.9 9.3 15.3 9.8 1.4.1 2.8.1 4.2 0 1.4.1 2.8.1 4.2 0 6.4-.5 12.2-4.2 15.3-9.8 2.2-4 2.7-8.8 1.4-13.1z"
        fill="#00758F"
      />
      <circle cx="56" cy="58" r="3" fill="#F29111" />
      <circle cx="72" cy="58" r="3" fill="#F29111" />
    </svg>
  );
}

// 9. Node.js
export function NodeIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#5FA04E"
        d="M64 16.5L22.9 40.2v47.6L64 111.5l41.1-23.7V40.2L64 16.5zm-5 69.8H47.4V56.6h11.6v29.7zm21.6-15.4c0 9.1-5.7 15.4-14.8 15.4h-2.1v-6h2.1c5.2 0 8.8-3.6 8.8-9.4 0-5.7-3.6-9.4-8.8-9.4h-2.1v-6h2.1c9.1 0 14.8 6.3 14.8 15.4z"
      />
    </svg>
  );
}

// 10. PHP
export function PHPIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="64" cy="64" rx="56" ry="34" fill="#777BB4" />
      <path
        fill="#FFFFFF"
        d="M44.7 54.8c1.3-4.8-1.5-8.3-6.9-8.3H26l-6.8 35h7.2l2.6-13.4h5.2c5.4 0 9.2-3.6 10.5-13.3zm-11.8.8h-4.3l1.8-9.2h4.3c2.4 0 3.7 1.3 3.1 4.6-.6 3.3-2.5 4.6-4.9 4.6zm34.3-9.1H60l-6.8 35h7.2l2.6-13.4h3.6c5.4 0 9.2-3.6 10.5-13.3 1.4-4.8-1.4-8.3-6.8-8.3h-3.1zm-4.6 13.5h-4.3l1.8-9.2h4.3c2.4 0 3.7 1.3 3.1 4.6-.6 3.3-2.5 4.6-4.9 4.6zm37.2-13.5H88l-6.8 35h7.2l2.6-13.4h5.2c5.4 0 9.2-3.6 10.5-13.3 1.3-4.8-1.5-8.3-6.9-8.3zm-11.8.8h-4.3l1.8-9.2h4.3c2.4 0 3.7 1.3 3.1 4.6-.6 3.3-2.5 4.6-4.9 4.6z"
      />
    </svg>
  );
}

// 11. Python
export function PythonIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#3776AB"
        d="M63.5 15.5c-24.8 0-23.2 10.8-23.2 10.8l.1 11.2h23.6v3.3H30.4S15.5 39 15.5 63.9s13 24 13 24h7.8v-11.2s-.4-13.4 13.2-13.4h22.8s12.8.2 12.8-12.4V28s1.9-12.5-21.6-12.5zm-12.9 7.3c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z"
      />
      <path
        fill="#FFD438"
        d="M64.5 112.5c24.8 0 23.2-10.8 23.2-10.8l-.1-11.2H64v-3.3h33.6s14.9 1.8 14.9-23.1-13-24-13-24h-7.8v11.2s.4 13.4-13.2 13.4H55.7s-12.8-.2-12.8 12.4V100s-1.9 12.5 21.6 12.5zm12.9-7.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"
      />
    </svg>
  );
}

// 12. Go (Golang)
export function GoIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#00ADD8"
        d="M36.8 62.4h32.5c-.8 6.5-3.8 11.2-8.5 14.2-4.8 3-10.8 4.5-18.1 4.5-8.2 0-14.8-2.6-19.8-7.9-5-5.3-7.5-12.6-7.5-21.8 0-9.3 2.6-16.7 7.7-22.1 5.2-5.4 12-8.1 20.6-8.1 7.2 0 13.2 1.9 17.8 5.7 4.7 3.8 7.4 9 8.2 15.6H54.4c-.6-3.2-1.9-5.6-3.9-7.2-2-1.6-4.7-2.4-8-2.4-4.8 0-8.5 1.7-11.2 5.1-2.7 3.4-4.1 8.5-4.1 15.2 0 6.6 1.4 11.6 4.1 14.9 2.7 3.3 6.4 5 11 5 4.4 0 7.8-1.1 10.1-3.3 2.3-2.2 3.6-5.1 4.1-8.7H36.8v-8.8zm63.7-21.2c7.8 0 14.2 2.7 19.3 8 5.1 5.3 7.6 12.6 7.6 21.8 0 9.2-2.5 16.5-7.6 21.8-5.1 5.3-11.5 8-19.3 8-7.8 0-14.2-2.7-19.3-8-5.1-5.3-7.6-12.6-7.6-21.8 0-9.2 2.5-16.5 7.6-21.8 5.1-5.3 11.5-8 19.3-8zm0 10.9c-4.4 0-7.9 1.7-10.6 5.1-2.6 3.4-4 8.5-4 15.1 0 6.6 1.3 11.6 4 15 2.7 3.4 6.2 5.1 10.6 5.1 4.4 0 7.9-1.7 10.6-5.1 2.6-3.4 4-8.4 4-15 0-6.6-1.3-11.7-4-15.1-2.7-3.4-6.2-5.1-10.6-5.1z"
      />
    </svg>
  );
}

// 13. Proxmox VE
export function ProxmoxIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#0F172A" />
      <path
        d="M64 24L32 44V84L64 104L96 84V44L64 24Z"
        stroke="#E57000"
        strokeWidth="6"
        fill="#E57000"
        fillOpacity="0.15"
      />
      <path
        d="M48 52L80 76M80 52L48 76"
        stroke="#E57000"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="64" cy="64" r="5" fill="#FFFFFF" />
    </svg>
  );
}

// 14. Linux / Tux
export function LinuxIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FCC624"
        d="M44 98c-8 0-14 4-16 10-1 4 2 8 8 8h56c6 0 9-4 8-8-2-6-8-10-16-10H44z"
      />
      <ellipse cx="64" cy="74" rx="28" ry="34" fill="#FFFFFF" />
      <path
        fill="#231F20"
        d="M64 18c-12 0-20 10-20 22 0 6 2 12 5 16-10 8-15 22-15 36 0 12 4 22 10 26 2-1 5-4 7-8 1-3 1-7 1-10 0-4 1-8 3-11 5 10 14 17 29 17s24-7 29-17c2 3 3 7 3 11 0 3 0 7 1 10 2 4 5 7 7 8 6-4 10-14 10-26 0-14-5-28-15-36 3-4 5-10 5-16 0-12-8-22-20-22z"
      />
      <ellipse cx="64" cy="78" rx="20" ry="24" fill="#FFFFFF" />
      <ellipse cx="58" cy="38" rx="3" ry="5" fill="#FFFFFF" />
      <ellipse cx="70" cy="38" rx="3" ry="5" fill="#FFFFFF" />
      <circle cx="59" cy="39" r="2" fill="#231F20" />
      <circle cx="69" cy="39" r="2" fill="#231F20" />
      <path fill="#FFA500" d="M60 46h8l-4 6z" />
    </svg>
  );
}

// 15. Ubuntu
export function UbuntuIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="54" fill="#E95420" />
      <circle cx="64" cy="64" r="30" stroke="#FFFFFF" strokeWidth="8" />
      <circle cx="28" cy="64" r="9" fill="#FFFFFF" />
      <circle cx="82" cy="33" r="9" fill="#FFFFFF" />
      <circle cx="82" cy="95" r="9" fill="#FFFFFF" />
      <circle cx="28" cy="64" r="6" fill="#E95420" />
      <circle cx="82" cy="33" r="6" fill="#E95420" />
      <circle cx="82" cy="95" r="6" fill="#E95420" />
      <path d="M50 64h-14M71 52l10-6M71 76l10 6" stroke="#E95420" strokeWidth="4" />
    </svg>
  );
}

// 16. Debian
export function DebianIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="56" fill="#1E293B" />
      <path
        d="M62.5 24c-18.2 0-33 13.8-33 30.8 0 12.8 8.4 23.8 20.5 28.3 1.6.6 2.5 2.4 1.9 4-1.2 3.2-3.8 8.7-8.9 11.4-1.6.8-1.9 2.9-.6 4.1 4.8 4.4 12.6 6.4 20.1 6.4 19.8 0 36-15.2 36-34 0-28.2-16.1-51-36-51z"
        stroke="#D70A53"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 17. Docker
export function DockerIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="36" y="52" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="48" y="52" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="60" y="52" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="48" y="42" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="60" y="42" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="72" y="42" width="10" height="8" rx="1" fill="#2496ED" />
      <rect x="60" y="32" width="10" height="8" rx="1" fill="#2496ED" />
      <path
        d="M106.8 62.4c-1.4-.9-4.8-1.5-7.5-.5-1-.9-3.7-2.1-7.7-1.7-1.1-5.7-5.4-8.8-5.4-8.8s-3.5 4.8-2.6 9.4c-4.4 2.5-9.6 2.6-14.8 2.6H23.5c-1.4 5.9.1 17.5 7.6 24.3 8.8 8 22.4 8.7 34.3 8.7 21.6 0 40.5-8.5 45.4-23.7 3.5-.5 7.2-2.8 7.2-2.8s-1.8-6.1-11.2-7.5z"
        fill="#2496ED"
      />
      <circle cx="38" cy="74" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

// 18. Nextcloud
export function NextcloudIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="24" stroke="#0082C9" strokeWidth="10" />
      <circle cx="34" cy="64" r="16" stroke="#0082C9" strokeWidth="8" />
      <circle cx="94" cy="64" r="16" stroke="#0082C9" strokeWidth="8" />
    </svg>
  );
}

// 19. Cloudflare
export function CloudflareIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M93.5 54.3c-2.4-11.5-12.7-20.3-25-20.3-10.4 0-19.4 6.2-23.3 15.2-2.6-.9-5.4-1.4-8.2-1.4-11.6 0-21 9.4-21 21 0 1.2.1 2.3.3 3.5C7.2 73.8 0 81.6 0 91c0 10.5 8.5 19 19 19h74.5c15.7 0 28.5-12.8 28.5-28.5 0-14.3-10.6-26.1-24.5-27.2h-4z"
        fill="#F38020"
      />
      <path
        d="M98 74h-48c-2.2 0-4 1.8-4 4s1.8 4 4 4h48c2.2 0 4-1.8 4-4s-1.8-4-4-4z"
        fill="#FAAD3F"
      />
    </svg>
  );
}

// 20. Nginx
export function NginxIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 16L18 42.5v53L64 122l46-26.5v-53L64 16z"
        fill="#009639"
      />
      <path
        d="M48 44v40l32-40v40"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 21. AdGuard Home
export function AdGuardIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 18L26 34v34c0 24 16.2 46.5 38 52 21.8-5.5 38-28 38-52V34L64 18z"
        fill="#68BC71"
      />
      <path
        d="M48 64l11 11 23-23"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 22. Git
export function GitIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M121.2 55.4L72.6 6.8c-3.7-3.7-9.8-3.7-13.6 0L46.8 19l16.1 16.1c3.9-1.3 8.5-.4 11.6 2.7 3.1 3.1 4 7.6 2.7 11.6l15.5 15.5c4-1.3 8.5-.4 11.6 2.7 4.3 4.3 4.3 11.2 0 15.5-4.3 4.3-11.2 4.3-15.5 0-3.3-3.3-4.1-8.1-2.5-12.2L71.3 55.8v32.5c1.2.6 2.3 1.4 3.2 2.3 4.3 4.3 4.3 11.2 0 15.5-4.3 4.3-11.2 4.3-15.5 0-4.3-4.3-4.3-11.2 0-15.5 1.1-1.1 2.4-1.9 3.8-2.5V55.2c-1.4-.6-2.7-1.4-3.8-2.5-3.3-3.3-4.1-8.1-2.5-12.2L40.7 24.8 6.8 58.7c-3.7 3.7-3.7 9.8 0 13.6l48.6 48.6c3.7 3.7 9.8 3.7 13.6 0l52.2-52.2c3.8-3.7 3.8-9.6 0-13.3z"
        fill="#F05032"
      />
    </svg>
  );
}

// 23. GitHub
export function GitHubIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 5.3C29.6 5.3 1.6 33.3 1.6 67.7c0 27.6 17.9 50.9 42.7 59.1 3.1.6 4.3-1.4 4.3-3 0-1.5-.1-6.5-.1-11.8-17.4 3.8-21-7.4-21-7.4-2.8-7.2-7-9.1-7-9.1-5.7-3.9.4-3.8.4-3.8 6.3.4 9.6 6.5 9.6 6.5 5.6 9.6 14.7 6.8 18.2 5.2.6-4.1 2.2-6.8 4-8.4-13.9-1.6-28.4-7-28.4-30.8 0-6.8 2.4-12.4 6.4-16.7-.6-1.6-2.8-7.9.6-16.5 0 0 5.2-1.7 17.1 6.4 5-1.4 10.3-2.1 15.6-2.1 5.3 0 10.6.7 15.6 2.1 11.9-8.1 17.1-6.4 17.1-6.4 3.4 8.6 1.2 14.9.6 16.5 4 4.3 6.4 9.9 6.4 16.7 0 23.9-14.6 29.2-28.5 30.7 2.2 1.9 4.3 5.7 4.3 11.5 0 8.3-.1 15-.1 17.1 0 1.6 1.1 3.6 4.3 3 24.8-8.2 42.6-31.5 42.6-59.1C126.4 33.3 98.4 5.3 64 5.3z"
      />
    </svg>
  );
}

// 24. TanStack Query
export function TanStackIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="54" fill="#18181B" />
      <circle cx="64" cy="64" r="38" stroke="#EF4444" strokeWidth="6" strokeDasharray="8 6" />
      <circle cx="64" cy="64" r="22" fill="#EF4444" />
      <circle cx="64" cy="64" r="10" fill="#FDE047" />
    </svg>
  );
}

// 25. Framer Motion
export function FramerMotionIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0055FF" d="M28 24h72v36H64l36 36H64v32l-36-36h36V56H28V24z" />
    </svg>
  );
}

// 26. KVM / QEMU
export function KVMIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="24" width="88" height="60" rx="8" stroke="#38BDF8" strokeWidth="6" />
      <path d="M44 94l-8 14h56l-8-14" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
      <circle cx="64" cy="54" r="14" stroke="#38BDF8" strokeWidth="5" />
      <path d="M54 54h20M64 44v20" stroke="#38BDF8" strokeWidth="4" />
    </svg>
  );
}

// 27. Terminal / Bash
export function BashIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" y="24" width="96" height="80" rx="12" fill="#1E293B" stroke="#4EAA25" strokeWidth="5" />
      <path d="M36 50l16 14-16 14" stroke="#4EAA25" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 82h32" stroke="#4EAA25" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// 28. REST API / Networking
export function ApiIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="64" r="16" fill="#0D9488" />
      <circle cx="94" cy="38" r="16" fill="#0D9488" />
      <circle cx="94" cy="90" r="16" fill="#0D9488" />
      <path d="M48 58l32-14M48 70l32 14" stroke="#5EEAD4" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// 29. ZFS Storage
export function ZFSIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="24" y="28" width="80" height="20" rx="4" fill="#1E293B" stroke="#60A5FA" strokeWidth="4" />
      <rect x="24" y="54" width="80" height="20" rx="4" fill="#1E293B" stroke="#60A5FA" strokeWidth="4" />
      <rect x="24" y="80" width="80" height="20" rx="4" fill="#1E293B" stroke="#60A5FA" strokeWidth="4" />
      <circle cx="36" cy="38" r="3" fill="#60A5FA" />
      <circle cx="36" cy="64" r="3" fill="#60A5FA" />
      <circle cx="36" cy="90" r="3" fill="#60A5FA" />
    </svg>
  );
}

// 30. aaPanel
export function AaPanelIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="18" y="22" width="92" height="84" rx="10" fill="#0F172A" stroke="#20A53A" strokeWidth="5" />
      <circle cx="34" cy="38" r="4" fill="#EF4444" />
      <circle cx="48" cy="38" r="4" fill="#F59E0B" />
      <circle cx="62" cy="38" r="4" fill="#10B981" />
      <path d="M34 60h60M34 76h42M34 92h24" stroke="#20A53A" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 31. HTML5
export function HTML5Icon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#E34F26" d="M19.2 114.7L9.6 7.3h108.8l-9.6 107.4L64 120.7z" />
      <path fill="#EF652A" d="M64 111.9l36.5-10.1 8-89.8H64z" />
      <path fill="#FFFFFF" d="M64 50.8H48.4l-1.1-12.4H64V26.2H33.8l3.3 37H64zm0 35.8l-.2.1-15.6-4.2-1-11.2H35l2 22.4L64 101.4z" />
      <path fill="#EBEBEB" d="M64 50.8h15.6l-1.5 16.5-14.1 3.8v12.7l25.3-7 3.5-38.4H64zm0-24.6h31.8l-.8 12.4H64z" />
    </svg>
  );
}

// 32. CSS3
export function CSS3Icon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#1572B6" d="M19.2 114.7L9.6 7.3h108.8l-9.6 107.4L64 120.7z" />
      <path fill="#33A9DC" d="M64 111.9l36.5-10.1 8-89.8H64z" />
      <path fill="#FFFFFF" d="M64 50.8H48.4l-1.1-12.4H64V26.2H33.8l3.3 37H64zm0 35.8l-.2.1-15.6-4.2-1-11.2H35l2 22.4L64 101.4z" />
      <path fill="#EBEBEB" d="M64 50.8h15.6l-1.5 16.5-14.1 3.8v12.7l25.3-7 3.5-38.4H64zm0-24.6h31.8l-.8 12.4H64z" />
    </svg>
  );
}

// Mapping function for easy dynamic resolution by name
export function getTechIcon(name: string): React.ComponentType<{ className?: string; size?: number }> {
  const n = name.toLowerCase();

  if (n.includes('next')) return NextjsIcon;
  if (n.includes('react')) return ReactIcon;
  if (n.includes('typescript') || n === 'ts') return TypeScriptIcon;
  if (n.includes('javascript') || n === 'js') return JavaScriptIcon;
  if (n.includes('tailwind')) return TailwindIcon;
  if (n.includes('supabase')) return SupabaseIcon;
  if (n.includes('postgres')) return PostgreSQLIcon;
  if (n.includes('mysql') || n.includes('mariadb')) return MySQLIcon;
  if (n.includes('node')) return NodeIcon;
  if (n.includes('php')) return PHPIcon;
  if (n.includes('python')) return PythonIcon;
  if (n.includes('golang') || n === 'go') return GoIcon;
  if (n.includes('proxmox')) return ProxmoxIcon;
  if (n.includes('ubuntu')) return UbuntuIcon;
  if (n.includes('debian')) return DebianIcon;
  if (n.includes('linux')) return LinuxIcon;
  if (n.includes('docker')) return DockerIcon;
  if (n.includes('nextcloud')) return NextcloudIcon;
  if (n.includes('cloudflare')) return CloudflareIcon;
  if (n.includes('nginx')) return NginxIcon;
  if (n.includes('adguard')) return AdGuardIcon;
  if (n.includes('github')) return GitHubIcon;
  if (n.includes('git')) return GitIcon;
  if (n.includes('tanstack') || n.includes('query')) return TanStackIcon;
  if (n.includes('framer')) return FramerMotionIcon;
  if (n.includes('kvm') || n.includes('qemu')) return KVMIcon;
  if (n.includes('bash') || n.includes('shell')) return BashIcon;
  if (n.includes('zfs')) return ZFSIcon;
  if (n.includes('aapanel')) return AaPanelIcon;
  if (n.includes('api') || n.includes('rest')) return ApiIcon;
  if (n.includes('html')) return HTML5Icon;
  if (n.includes('css')) return CSS3Icon;

  // Fallback to Terminal Bash icon
  return BashIcon;
}

# Dockerfile para KSC Website
# Next.js 15 con Turbopack - Producción (Bun Edition)

# Etapa 1: Dependencias
FROM oven/bun:1 AS deps
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lock ./

# Instalar dependencias
RUN bun install --frozen-lockfile --production

# Etapa 2: Builder
FROM oven/bun:1 AS builder
WORKDIR /app

# Copiar dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Variables de entorno para build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Generar build de producción
RUN bun run build

# Etapa 3: Runner (Producción)
FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar permisos (no siempre necesario con Bun, pero mantenemos por si acaso)
# RUN chown -R nextjs:nodejs /app
# Bun corre como root por defecto en el contenedor, ajuste si se necesita usuario especifico
# Para keep it simple, usaremos el usuario por defecto o el que definimos

USER nextjs

# Exponer puerto
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando de inicio
CMD ["bun", "server.js"]

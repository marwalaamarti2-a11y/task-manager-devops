# task-manager-devops

Application de gestion des tâches avec pipeline CI/CD et déploiement automatisé
(Spring Boot, Angular, PostgreSQL, Docker, GitHub Actions).

## Structure du dépôt

- `backend/` : API Spring Boot (Java 21, Maven)
- `frontend/` : application Angular
- `docker/` : Dockerfiles et configuration
- `infra/` : scripts d'infrastructure et de déploiement
- `.github/workflows/` : pipelines CI/CD

## Prérequis

- Java 21
- Docker
- Node.js (pour le frontend)
- Git

## Lancer le backend en local

1. Démarrer PostgreSQL dans un conteneur :

```bash
docker run -d --name pg-tasks -p 5432:5432 \
  -e POSTGRES_DB=tasks -e POSTGRES_USER=tasks \
  -e POSTGRES_PASSWORD=<mot_de_passe> postgres:16
```

2. Définir les variables d'environnement (jamais de mot de passe dans le code) :

| Variable | Rôle |
| --- | --- |
| `DB_URL` | URL JDBC de la base |
| `DB_USER` | Utilisateur de la base |
| `DB_PASSWORD` | Mot de passe de la base |

3. Lancer l'application :

```bash
cd backend
./mvnw spring-boot:run
```

4. Vérifier : `GET http://localhost:8080/api/health`

## Lancer les tests

```bash
cd backend
./mvnw -B verify
```

## Règles d'équipe

- `main` est protégé : aucune modification directe, tout passe par une pull request.
- Branches courtes : `feature/xxx`, `fix/xxx`, `docs/xxx`.
- Chaque PR est relue et approuvée par l'autre membre, et la CI doit être verte.
- Commits conventionnels : `feat:`, `fix:`, `ci:`, `docker:`, `docs:`.
- Une issue par tâche, suivie dans le GitHub Project « Taskflow - Backlog ».

## CI/CD

Le workflow `.github/workflows/ci.yml` build et teste le projet à chaque push et chaque pull request.

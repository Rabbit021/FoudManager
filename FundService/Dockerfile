#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["FundService/FundService.csproj", "FundService/"]
RUN dotnet restore "FundService/FundService.csproj"
COPY . .
WORKDIR "/src/FundService"
RUN dotnet build "FundService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FundService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FundService.dll"]
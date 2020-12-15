push!(LOAD_PATH,"../src/")

using Documenter
using JackPolynomials

makedocs(
    sitename = "JackPolynomials.jl",
    authors = "Stéphane Laurent",
    format = Documenter.HTML(;
        prettyurls = get(ENV, "CI", "false") == "true",
        canonical = "https://stla.github.io/JackPolynomials.jl",
        assets = String[],
    ),
    modules = [JackPolynomials],
    pages = ["Documentation"  => "index.md"],
    repo = "https://github.com/stla/JackPolynomials.jl/blob/{commit}{path}#{line}"
)

deploydocs(;
    branch = "gh-pages",
    devbranch = "main",
    repo = "github.com/stla/JackPolynomials.jl",
)

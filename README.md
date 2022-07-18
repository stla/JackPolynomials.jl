# JackPolynomials.jl

[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://stla.github.io/JackPolynomials.jl/dev)

Schur polynomials have applications in combinatorics and zonal polynomials have
applications in multivariate statistics. They are particular cases of
[Jack polynomials](https://en.wikipedia.org/wiki/Jack_function). This package
allows to evaluate these polynomials. It can also compute their symbolic form:

```julia
julia> jack = JackPolynomial(2, [3 ; 1], 2.5)
24.5x₁³x₂ + 14.0x₁²x₂² + 24.5x₁x₂³

julia> jack(1,2)
301.0
```

Here `2.5` is the value of the `alpha` parameter. One can use a rational
number instead:

```julia
JackPolynomial(2, [3; 1], 1//4)
25//8x₁³x₂ + 5//1x₁²x₂² + 25//8x₁x₂³
```

It is also possible to deal with a symbolic `alpha`:

```julia
julia> jack = JackPolynomial(2, [2 ; 1])
(alpha + 2)*x_1^2*x_2 + (alpha + 2)*x_1*x_2^2

julia> jack(1,2)
6*alpha + 12
```

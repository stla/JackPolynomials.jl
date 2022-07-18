var documenterSearchIndex = {"docs":
[{"location":"#JackPolynomials.jl-documentation","page":"Documentation","title":"JackPolynomials.jl documentation","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Schur polynomials have applications in combinatorics and zonal polynomials have applications in multivariate statistics. They are particular cases of Jack polynomials. This package allows to evaluate these polynomials. It can also compute their symbolic form:","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"julia> jack = JackPolynomial(2, [3 ; 1], 2.5)\n24.5x₁³x₂ + 14.0x₁²x₂² + 24.5x₁x₂³\n\njulia> jack(1,2)\n301.0","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"Here 2.5 is the value of the alpha parameter. It is also possible to deal with a symbolic alpha:","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"julia> jack = JackPolynomial(2, [2 ; 1])\n(alpha + 2)*x_1^2*x_2 + (alpha + 2)*x_1*x_2^2\n\njulia> jack(1,2)\n6*alpha + 12","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"Such a polynomial is associated to a partition of an integer (the lambda argument in the Julia functions). It must be given as a decreasing vector of nonnegative integers (tail-zeros are allowed but they are ignored: the partion [3; 2; 0] is the same as [3; 2]).","category":"page"},{"location":"#Reference","page":"Documentation","title":"Reference","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"James Demmel & Plamen Koev. Accurate and efficient evaluation of Schur and Jack functions. Mathematics of Computation 75, 253 (2015), 223-239.","category":"page"},{"location":"#Member-functions","page":"Documentation","title":"Member functions","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [JackPolynomials]\nOrder   = [:type, :function]","category":"page"},{"location":"#JackPolynomials.Jack-Union{Tuple{C}, Tuple{I}, Tuple{T}, Tuple{Vector{C}, Vector{I}, T}} where {T<:Real, I<:Integer, C<:Number}","page":"Documentation","title":"JackPolynomials.Jack","text":"Jack(x, lambda, alpha)\n\nEvaluates a Jack polynomial.\n\nArguments\n\nx: vector of real or complex numbers\nlambda: partition of an integer\nalpha: alpha parameter\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.JackPolynomial-Union{Tuple{I}, Tuple{I, Vector{I}}} where I<:Integer","page":"Documentation","title":"JackPolynomials.JackPolynomial","text":"JackPolynomial(m, lambda)\n\nSymbolic Jack polynomial with symbolic parameter alpha.\n\nArguments\n\nm: integer, the number of variables\nlambda: partition of an integer\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.JackPolynomial-Union{Tuple{I}, Tuple{T}, Tuple{I, Vector{I}, T}} where {T<:Real, I<:Integer}","page":"Documentation","title":"JackPolynomials.JackPolynomial","text":"JackPolynomial(m, lambda, alpha)\n\nSymbolic Jack polynomial. The coefficients of the polynomial will have the same type as alpha.\n\nArguments\n\nm: integer, the number of variables\nlambda: partition of an integer\nalpha: alpha parameter\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.Schur-Union{Tuple{I}, Tuple{T}, Tuple{Vector{T}, Vector{I}}} where {T<:Number, I<:Integer}","page":"Documentation","title":"JackPolynomials.Schur","text":"Schur(x, lambda)\n\nEvaluates a Schur polynomial.\n\nArguments\n\nx: vector of real or complex numbers\nlambda: partition of an integer\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.SchurPolynomial-Union{Tuple{I}, Tuple{I, Vector{I}}, Tuple{I, Vector{I}, Type}} where I<:Integer","page":"Documentation","title":"JackPolynomials.SchurPolynomial","text":"SchurPolynomial(m, lambda[, type])\n\nSymbolic Schur polynomial.\n\nArguments\n\nm: integer, the number of variables\nlambda: partition of an integer\ntype: the type of the coefficients of the polynomial; default Int64\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.Zonal-Union{Tuple{R}, Tuple{Vector{<:Union{Complex{R}, R}}, Vector{<:Integer}}} where R<:Real","page":"Documentation","title":"JackPolynomials.Zonal","text":"Zonal(x, lambda)\n\nEvaluates a zonal polynomial.\n\nArguments\n\nx: vector of real or complex numbers\nlambda: partition of an integer\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.ZonalPolynomial-Union{Tuple{I}, Tuple{I, Vector{I}}, Tuple{I, Vector{I}, Type}} where I<:Integer","page":"Documentation","title":"JackPolynomials.ZonalPolynomial","text":"ZonalPolynomial(m, lambda[, type])\n\nSymbolic zonal polynomial.\n\nArguments\n\nm: integer, the number of variables\nlambda: partition of an integer\ntype: the type of the coefficients of the polynomial; default Rational\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.ZonalQ-Union{Tuple{R}, Tuple{Vector{<:Union{Complex{R}, R}}, Vector{<:Integer}}} where R<:Real","page":"Documentation","title":"JackPolynomials.ZonalQ","text":"ZonalQ(x, lambda)\n\nEvaluates a quaternionic zonal polynomial.\n\nArguments\n\nx: vector of real or complex numbers\nlambda: partition of an integer\n\n\n\n\n\n","category":"method"},{"location":"#JackPolynomials.ZonalQPolynomial-Union{Tuple{I}, Tuple{I, Vector{I}}, Tuple{I, Vector{I}, Type}} where I<:Integer","page":"Documentation","title":"JackPolynomials.ZonalQPolynomial","text":"ZonalQPolynomial(m, lambda[, type])\n\nSymbolic quaternionic zonal polynomial.\n\nArguments\n\nm: integer, the number of variables\nlambda: partition of an integer\ntype: the type of the coefficients of the polynomial; default Rational\n\n\n\n\n\n","category":"method"}]
}